"""
Some editors or linters (e.g. VS Code/Pylance) may report
"Import 'flask' could not be resolved" when the Flask package is
installed inside a virtual environment. Adding a type-ignore comment
helps suppress false-positive static analysis warnings while keeping
normal runtime ImportError behavior.
"""
try:
    from flask import Flask, request, jsonify, send_file  # type: ignore
except ImportError:
    print("Error: Flask not installed. Install with: pip install flask")
    raise

try:
    from flask_cors import CORS  # type: ignore
except ImportError:
    # flask_cors may not be installed in this environment; provide a no-op fallback
    print("Warning: flask_cors not installed. Install with: pip install flask-cors")
    CORS = None
import os

try:
    from rembg import remove  # type: ignore
except ImportError:
    print("Warning: rembg not installed. Install with: pip install rembg")
    remove = None

app = Flask(__name__)
if CORS:
    CORS(app)

UPLOAD_FOLDER = "uploads"
OUTPUT_FOLDER = "outputs"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

@app.route("/upload", methods=["POST"])
def upload_image():
    file = request.files["image"]

    input_path = os.path.join(UPLOAD_FOLDER, file.filename)
    output_path = os.path.join(OUTPUT_FOLDER, "no_bg.png")

    file.save(input_path)

    # remove background
    if remove is None:
        return jsonify({"error": "rembg not installed on server"}), 500

    with open(input_path, "rb") as i:
        with open(output_path, "wb") as o:
            input_data = i.read()
            output_data = remove(input_data)
            o.write(output_data)

    return jsonify({
        "image_url": "http://localhost:5000/result"
    })

@app.route("/result")
def result():
    return send_file("outputs/no_bg.png", mimetype="image/png")

if __name__ == "__main__":
    app.run(debug=True)
    
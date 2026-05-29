from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from rembg import remove
import os

app = Flask(__name__)
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

    with open(input_path, "rb") as i:
        with open(output_path, "wb") as o:
            output_data = remove(i.read())
            o.write(output_data)

    return jsonify({
        "image_url": "http://localhost:5000/result"
    })

@app.route("/result")
def result():
    return send_file("outputs/no_bg.png", mimetype="image/png")

if __name__ == "__main__":
    app.run(debug=True)
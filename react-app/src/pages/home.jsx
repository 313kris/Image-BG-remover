import { useState } from "react";
import "../App.css";

function Home() {

  const [originalImage, setOriginalImage] = useState(null);
  const [removedImage, setRemovedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Upload Image
  const handleImage = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    // Show Original Image
    const imageURL = URL.createObjectURL(file);
    setOriginalImage(imageURL);

    // Start Loading
    setLoading(true);

    // API FormData
    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("size", "auto");

    try {

      // API Request
      const response = await fetch(
        "https://api.remove.bg/v1.0/removebg",
        {
          method: "POST",

          headers: {
            "X-Api-Key":
              "s2ydjcv3XjyanrGX7CSasppL",
          },

          body: formData,
        }
      );

      // Convert Response
      const blob = await response.blob();

      // Create Image URL
      const removedURL =
        URL.createObjectURL(blob);

      // Show Removed Image
      setRemovedImage(removedURL);

    } catch (error) {

      alert(
        "Background Removal Failed"
      );

      console.log(error);

    }

    setLoading(false);
  };
    const [originalImage, setOriginalImage] = useState(null);

const handleImageUpload = (e) => {

  const file = e.target.files[0];

  if (file) {

    const imageURL = URL.createObjectURL(file);

    setOriginalImage(imageURL);
  }
};
  return (
    <div className="home-page">

      {/* Navbar */}
      <nav className="navbar">
        <h2>BG Remover</h2>
      </nav>

      {/* Hero */}
      <div className="hero">

        <div className="hero-left">

          <h1>
            Remove Background from Images
          </h1>

          <p>
            Upload image and AI will remove
            the background automatically.
          </p>
          {originalImage && (

  <div className="preview-section">

    <h2>Uploaded Image</h2>

    <img
      src={originalImage}
      alt="preview"
      className="preview-image"
    />

  </div>
)}
          {/* Upload Button */}
          <label className="upload-btn">

            Upload Image

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImage}
            />

          </label>

        </div>

      </div>

      {/* Loading */}
      {loading && (
        <div className="loader"></div>
      )}

      {/* Result Section */}
      {(originalImage || removedImage) && (

        <div className="result-section">

          {/* Original */}
          <div className="image-box">

            <h2>Original Image</h2>

            <img
              src={originalImage}
              alt="original"
            />

          </div>

          {/* Removed */}
          <div className="image-box">

            <h2>Background Removed</h2>

            <img
              src={removedImage}
              alt="removed"
            />

            {/* Download */}
            {removedImage && (
              <a
                href={removedImage}
                download="removed-bg.png"
                className="download-btn"
              >
                Download Image
              </a>
            )}

          </div>

        </div>
      )}

    </div>
  );
}

export default Home;
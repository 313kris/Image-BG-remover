import "./App.css";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);

const [original, setOriginal] = useState(null);

const [originalFile, setOriginalFile] = useState(null);

const [removed, setRemoved] = useState(null);

const [loading, setLoading] = useState(false);

  // Upload Image
 const handleImage = (e) => {

  const file = e.target.files[0];

  if (file) {

    setOriginalFile(file);

    const imageUrl = URL.createObjectURL(file);

    setOriginal(imageUrl);

    setRemoved(null);
  }
};

  // Fake AI Background Removal
  const handleRemove = async () => {

  if (!originalFile) {
    alert("Please upload image first");
    return;
  }

  setLoading(true);

  const formData = new FormData();

  formData.append("image_file", originalFile);

  formData.append("size", "auto");

  try {

    const response = await fetch(
      "https://api.remove.bg/v1.0/removebg",
      {
        method: "POST",

        headers: {
          "X-Api-Key": "kg1kT4oSq3XnQuPYni8q96Gr",
        },

        body: formData,
      }
    );

    const blob = await response.blob();

    const imageURL = URL.createObjectURL(blob);

    setRemoved(imageURL);

  } catch (error) {

    console.log(error);

    alert("Failed to remove background");

  }

  setLoading(false);
};

  // Login
  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login Successful");

    setShowLogin(false);
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <h2 className="logo">BG Remover</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#works">How It Works</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>

        <button
          className="login-btn"
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>

      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">

        <div className="hero-left">

          <h1>
            Remove the <span>background</span>
            <br />
            from images for free
          </h1>

          <p>
            Transform your photos instantly with AI powered
            background remover.
          </p>

          {/* Upload */}
          <label className="upload-btn">

            Upload Image

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImage}
            />

          </label>

          {/* Remove Button */}
          {original && (
            <button
              className="remove-btn"
              onClick={handleRemove}
            >
              Remove Background
            </button>
          )}

        </div>

        <div className="hero-right">

          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop"
            alt="preview"
          />

        </div>

      </section>

      {/* FEATURES */}
      <section className="features" id="features">

        <h2>Steps to remove background image</h2>

        <div className="feature-cards">

          <div className="card">
            <h3>Upload Image</h3>
            <p>Select image from your device.</p>
          </div>

          <div className="card">
            <h3>Remove Background</h3>
            <p>AI removes background automatically.</p>
          </div>

          <div className="card">
            <h3>Download Image</h3>
            <p>Download transparent PNG image.</p>
          </div>

        </div>

      </section>

      {/* RESULT SECTION */}
      {(original || removed) && (

        <section
          className="result-section"
          id="result-section"
        >

          <h2>Background Removal Result</h2>

          {loading && <div className="loader"></div>}

          <div className="image-grid">

            <div className="image-box">

              <h3>Original</h3>

              {original && (
                <img src={original} alt="original" />
              )}

            </div>

            <div className="image-box">

              <h3>Background Removed</h3>

              {removed && (
                <img src={removed} alt="removed" />
              )}

            </div>

          </div>

          {removed && (

            <a
              href={removed}
              download="removed-image.png"
              className="download-btn"
            >
              Download Image
            </a>

          )}

        </section>

      )}

      {/* HOW IT WORKS */}
      <section className="works" id="works">

        <h2>How It Works</h2>

        <div className="works-box">

          <div className="step">
            <span>1</span>
            <p>Upload Image</p>
          </div>

          <div className="step">
            <span>2</span>
            <p>AI Processing</p>
          </div>

          <div className="step">
            <span>3</span>
            <p>Download Result</p>
          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section
        className="testimonials"
        id="testimonials"
      >

        <h2>Customer Testimonials</h2>

        <div className="testimonial-container">

          <div className="testimonial-card">
            <p>
              Amazing tool! Removes background perfectly.
            </p>
            <h4>Richard Nelson</h4>
          </div>

          <div className="testimonial-card">
            <p>
              Best free background remover website.
            </p>
            <h4>Donald Jackman</h4>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 BG Remover | All Rights Reserved
      </footer>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="login-overlay">
          <div className="modern-login">
            {/* LEFT SIDE */}
            <div className="login-left">
              <h1>Welcome Back!</h1>
              <p>Login to your account and continue</p>
              <form onSubmit={handleLogin}>
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
                <div className="login-options">
                  <div>
                    <input type="checkbox" />
                    <span> Remember me</span>
                  </div>
                  <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
              </form>
              <p className="signup-text">
                Don't have an account?
                <span> Sign up</span>
              </p>
            </div>
            {/* RIGHT SIDE */}
            <div className="login-right">
              <div className="lock-icon">🔒</div>
              <h2>Secure. Simple. Smart.</h2>
              <p>
                Your data is safe with us.
                <br />
                Login to access powerful tools.
              </p>
            </div>
            {/* CLOSE BUTTON */}
            <button className="close-btn" onClick={() => setShowLogin(false)}>
              ×
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
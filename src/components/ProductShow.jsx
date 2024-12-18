import React from "react";
import "../styles/styles.css"; // Adjust the path as needed
import img1 from "../assets/img/chairandtable.png";
import img2 from "../assets/img/sofa.png";
import img3 from "../assets/img/repaire.jpg";
import img4 from "../assets/img/chair.png";

function ProductShow() {
  const promptLogin = () => {
    const userResponse = window.confirm(
      "Please log in or register to proceed with your purchase."
    );
    if (userResponse) {
      // Redirect to login page
      window.location.href = "/login"; // Update the URL as per your login page
    }
  };

  return (
    <section>
      <h2>Our E-Showroom</h2>
      <p className="section-description">
        Explore our exclusive collection of furniture products designed to
        enhance your living spaces.
      </p>

      {/* Living Room Furniture */}
      <div className="category">
        <div className="category-header">
          <h3>Living Room Furniture</h3>
        </div>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">
              <img src={img1} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Elegant Sofa</h3>
              <p className="price">$799</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img2} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Modern Coffee Table</h3>
              <p className="price">$299</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img3} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Comfortable Armchair</h3>
              <p className="price">$499</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img1} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Entertainment Unit</h3>
              <p className="price">$599</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img4} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Entertainment Unit</h3>
              <p className="price">$599</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img1} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Entertainment Unit</h3>
              <p className="price">$599</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img2} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Entertainment Unit</h3>
              <p className="price">$599</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img3} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Entertainment Unit</h3>
              <p className="price">$599</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShow;

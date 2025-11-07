// src/pages/Furnishings.jsx
import "./Interiors.css"; // reuse the same styles

export default function Furnishings() {
  return (
    <div className="offer-page">

      <section className="offer-hero">
        <img
          className="offer-hero-img"
          src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
          alt="Home Furnishings"
        />
        <div className="offer-hero-overlay">
          <h1>Furnishings Tailored to Your Home</h1>
          <p>Complete your space with premium curated furniture & décor.</p>
        </div>
      </section>

      <section className="offer-section">
        <h2>What We Offer</h2>

        <div className="offer-cards">
          <article className="offer-card">
            <img src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg" alt="" />
            <div className="card-body">
              <h3>Bedroom Furniture</h3>
              <p>Beds, side tables, dressers and more — crafted for comfort and durability.</p>
            </div>
          </article>

          <article className="offer-card">
            <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className="card-body">
              <h3>Living Room Furnishings</h3>
              <p>Sofas, center tables, rugs, TV units and décor accessories.</p>
            </div>
          </article>

          <article className="offer-card">
            <img src="https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg" alt="" />
            <div className="card-body">
              <h3>Decor Collection</h3>
              <p>Lighting, art pieces, planters and accents to elevate your interiors.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="offer-journey">
        <h2>How Furnishing Works</h2>

        <div className="journey-steps">
          <div className="step">
            <h4>1. Style Selection</h4>
            <p>Choose your desired aesthetic — modern, minimal or luxurious.</p>
          </div>

          <div className="step">
            <h4>2. Product Matching</h4>
            <p>We suggest curated items that match your space & budget.</p>
          </div>

          <div className="step">
            <h4>3. Delivery</h4>
            <p>All items arrive together for seamless setup.</p>
          </div>

          <div className="step">
            <h4>4. Setup</h4>
            <p>Our team arranges and places everything perfectly.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

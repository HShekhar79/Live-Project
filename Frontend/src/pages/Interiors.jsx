// src/pages/Interiors.jsx
import "./Interiors.css";

export default function Interiors() {
  return (
    <div className="offer-page">
      {/* HERO */}
      <section className="offer-hero">
        <img
          className="offer-hero-img"
          src="https://images.pexels.com/photos/6301174/pexels-photo-6301174.jpeg"
          alt="Modern Interior Design"
        />
        <div className="offer-hero-overlay">
          <h1>Interior Solutions for Every Home</h1>
          <p>Create beautiful, functional spaces that reflect your lifestyle.</p>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="offer-section">
        <h2>What We Offer</h2>

        <div className="offer-cards">
          <article className="offer-card">
            <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" alt="" />
            <div className="card-body">
              <h3>Modular Kitchen</h3>
              <p>
                Experience the perfect blend of beauty and utility with premium
                modular kitchens designed for Indian homes.
              </p>
            </div>
          </article>

          <article className="offer-card">
            <img src="https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg" alt="" />
            <div className="card-body">
              <h3>Wardrobe Designs</h3>
              <p>
                Sliding, hinged or walk-in wardrobes — fully customisable to
                match your storage needs.
              </p>
            </div>
          </article>

          <article className="offer-card">
            <img src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg" alt="" />
            <div className="card-body">
              <h3>Living Space Interiors</h3>
              <p>
                Elevate your living room with TV units, bookshelves, wall
                panels, lighting and more.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="offer-journey">
        <h2>Your Interior Journey</h2>

        <div className="journey-steps">
          <div className="step">
            <h4>1. Consultation</h4>
            <p>Tell us your style, needs and space details.</p>
          </div>

          <div className="step">
            <h4>2. Design & Planning</h4>
            <p>We craft a custom layout, materials selection and 3D visuals.</p>
          </div>

          <div className="step">
            <h4>3. Production</h4>
            <p>Your modular units are manufactured with precision.</p>
          </div>

          <div className="step">
            <h4>4. Installation</h4>
            <p>Our experts assemble and finish everything on-site.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

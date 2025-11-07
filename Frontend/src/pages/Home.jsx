import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <img className="hero-bg" src="/background.jpg" alt="" />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <h1>Curious about your dream home price?</h1>
          <p>Get an accurate estimate based on size, location and key home details.</p>
          <a className="cta" href="#price-calculators">Get Started</a>
        </div>
      </section>

      {/* STEPS */}
      <section className="steps" id="price-calculators">
        <h2>Estimate your home value in 4 easy steps</h2>
        <div className="steps-grid">

          <div className="step">
            <img className="illus" src="/illus-bhk.svg" alt="" />
            <h3>Select home type</h3>
            <p>Choose whether your property is 1/2/3 BHK or an independent house.</p>
          </div>

          <div className="step">
            <img className="illus" src="/illus-size.svg" alt="" />
            <h3>Enter property size</h3>
            <p>Provide approximate built-up or carpet area for fair valuation.</p>
          </div>

          <div className="step">
            <img className="illus" src="/illus-rooms.svg" alt="" />
            <h3>Choose key features</h3>
            <p>Mention floor, age of the property, amenities and other parameters.</p>
          </div>

          <div className="step">
            <img className="illus" src="/illus-package.svg" alt="" />
            <h3>Get price estimate</h3>
            <p>Our model evaluates the data and predicts an accurate market value.</p>
          </div>

        </div>
      </section>

      {/* ESTIMATES */}
      <section className="estimates">
        <div className="title-row">
          <h2>Estimates for every type of home</h2>
          <Link className="cta ghost" to="/price-calculator">Check Now</Link>
        </div>

        <div className="cards">
          <article className="card">
            <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            <div className="card-body">
              <h3>2 BHK</h3>
              <p>Get a realistic market price for a typical 2 BHK apartment in your city.</p>
            </div>
          </article>

          <article className="card">
            <img src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            <div className="card-body">
              <h3>1 BHK</h3>
              <p>Find out how size, location and amenities affect 1 BHK home pricing.</p>
            </div>
          </article>

          <article className="card">
            <img src="https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            <div className="card-body">
              <h3>3 BHK</h3>
              <p>Get accurate valuation for spacious homes based on current trends.</p>
            </div>
          </article>
        </div>
      </section>

      {/* EXPLAINER */}
      <section className="explainer" id="journey">
        <h2>How does our home price estimator work?</h2>
        <div className="exp-grid">
          <div>
            <h3>Home type</h3>
            <p>Our model identifies property category and structures valuation rules accordingly.</p>
          </div>
          <div>
            <h3>Size & area</h3>
            <p>Price per sq. ft. is calculated using location trends and property age.</p>
          </div>
          <div>
            <h3>Key features</h3>
            <p>Amenities, floor level, connectivity and more help refine the final estimate.</p>
          </div>
        </div>
        <Link className="cta" to="/price-calculator">Calculate Now</Link>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>FAQs</h2>

        <details>
          <summary>Will the estimate change based on location?</summary>
          <p>Yes. Market prices vary widely across cities and neighborhoods.</p>
        </details>

        <details>
          <summary>Does it use house size and features?</summary>
          <p>Yes. The more details you provide, the more accurate the prediction.</p>
        </details>

        <details>
          <summary>Can I estimate for an under-construction property?</summary>
          <p>Yes. Our system factors in project status and expected completion timelines.</p>
        </details>

        <details>
          <summary>Is the predicted price accurate?</summary>
          <p>It’s a strong approximation based on real market data and trained ML models.</p>
        </details>

      </section>
    </div>
  );
}

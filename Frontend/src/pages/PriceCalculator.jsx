// src/pages/PriceCalculator.jsx
import { useMemo, useState, useEffect } from "react";
import LocationMap from "../components/LocationMap";
import "./PriceCalculator.css";

const CITY_MULTIPLIER = {
  Bangalore: 1.15,
  Mumbai: 1.35,
  Delhi: 1.25,
  Pune: 1.08,
  Hyderabad: 1.12,
  Chennai: 1.10,
  Kolkata: 0.95,
  Other: 1.0,
};

const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export default function PriceCalculator() {
  // Core inputs
  const [city, setCity] = useState("Delhi");
  const [bhk, setBhk] = useState(2);
  const [baths, setBaths] = useState(2);
  const [area, setArea] = useState(1000);

  // Options
  const [furnishing, setFurnishing] = useState("Unfurnished");
  const [parking, setParking] = useState("Yes");
  const [ready, setReady] = useState("Yes");
  const [resale, setResale] = useState("Yes");
  const [underConst, setUnderConst] = useState("No");
  const [seller, setSeller] = useState("Builder");

  // ---------- NEW: map center + pin ----------
  const cityCenter = {
    Delhi: [28.6139, 77.209],
    Bangalore: [12.9716, 77.5946],
    Mumbai: [19.076, 72.8777],
    Hyderabad: [17.385, 78.4867],
    Pune: [18.5204, 73.8567],
    Chennai: [13.0827, 80.2707],
    Kolkata: [22.5726, 88.3639],
    Other: [20.5937, 78.9629], // India fallback
  };

  const center = useMemo(
    () => cityCenter[city] ?? [20.5937, 78.9629],
    [city]
  );

  const [position, setPosition] = useState(center);

  // Recenter/Reset pin when city changes (optional)
  useEffect(() => {
    setPosition(center);
  }, [center]);
  // -------------------------------------------

  // Simple “premium looking” fake model
  const estimate = useMemo(() => {
    // base rate (INR / sq ft) — toy values to keep page fully client-side
    const base = 4500;

    let rate = base * (CITY_MULTIPLIER[city] ?? 1);

    // adjustments
    rate *= 1 + Math.max(0, bhk - 2) * 0.04; // more BHK → higher rate
    rate *= 1 + Math.max(0, baths - 2) * 0.02; // more bathrooms → slightly higher
    if (parking === "Yes") rate *= 1.03;
    if (ready === "Yes") rate *= 1.02;
    if (resale === "No") rate *= 1.02; // new property
    if (underConst === "Yes") rate *= 0.96; // little cheaper
    if (seller === "Owner") rate *= 0.99;
    if (seller === "Dealer") rate *= 1.01;

    if (furnishing === "Semi-Furnished") rate *= 1.03;
    if (furnishing === "Furnished") rate *= 1.06;

    const price = Math.max(0, Math.round(rate * Number(area || 0)));
    const low = Math.round(price * 0.95);
    const high = Math.round(price * 1.08);
    return { price, low, high, rate: Math.round(rate) };
  }, [
    city,
    bhk,
    baths,
    area,
    furnishing,
    parking,
    ready,
    resale,
    underConst,
    seller,
  ]);

  return (
    <div className="pc">
      {/* page header */}
      <header className="pc-hero">
        <div className="pc-hero-inner">
          <h1>Home Price Calculator</h1>
          <p>
            Enter a few details to get an instant, model-based price band for
            your home.
          </p>
        </div>
      </header>

      <main className="pc-wrap">
        {/* left: form */}
        <section className="pc-left">
          <div className="pc-card">
            <h2 className="pc-sec-title">Property Details</h2>

            <div className="pc-grid">
              {/* City */}
              <div className="pc-field">
                <label>City</label>
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                  {Object.keys(CITY_MULTIPLIER).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* BHK */}
              <div className="pc-field">
                <label>Number of BHK</label>
                <div className="pc-step">
                  <button
                    type="button"
                    onClick={() => setBhk((v) => Math.max(1, v - 1))}
                  >
                    −
                  </button>
                  <input
                    value={bhk}
                    onChange={(e) =>
                      setBhk(Math.max(1, Number(e.target.value) || 1))
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setBhk((v) => Math.min(6, v + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Bathrooms */}
              <div className="pc-field">
                <label>Bathrooms</label>
                <div className="pc-step">
                  <button
                    type="button"
                    onClick={() => setBaths((v) => Math.max(1, v - 1))}
                  >
                    −
                  </button>
                  <input
                    value={baths}
                    onChange={(e) =>
                      setBaths(Math.max(1, Number(e.target.value) || 1))
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setBaths((v) => Math.min(6, v + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Area */}
              <div className="pc-field">
                <label>Area (sq ft)</label>
                <input
                  type="number"
                  min="100"
                  step="10"
                  value={area}
                  onChange={(e) =>
                    setArea(Math.max(100, Number(e.target.value) || 100))
                  }
                  placeholder="e.g. 1000"
                />
              </div>

              {/* Furnishing */}
              <div className="pc-field">
                <label>Furnishing</label>
                <select
                  value={furnishing}
                  onChange={(e) => setFurnishing(e.target.value)}
                >
                  <option>Unfurnished</option>
                  <option>Semi-Furnished</option>
                  <option>Furnished</option>
                </select>
              </div>

              {/* Parking */}
              <div className="pc-field">
                <label>Car Parking</label>
                <select
                  value={parking}
                  onChange={(e) => setParking(e.target.value)}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              {/* Ready to move */}
              <div className="pc-field">
                <label>Ready to Move</label>
                <select value={ready} onChange={(e) => setReady(e.target.value)}>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              {/* Resale */}
              <div className="pc-field">
                <label>Resale Property</label>
                <select value={resale} onChange={(e) => setResale(e.target.value)}>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              {/* Under Construction */}
              <div className="pc-field">
                <label>Under Construction</label>
                <select
                  value={underConst}
                  onChange={(e) => setUnderConst(e.target.value)}
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              {/* Seller */}
              <div className="pc-field">
                <label>Seller Type</label>
                <select value={seller} onChange={(e) => setSeller(e.target.value)}>
                  <option>Builder</option>
                  <option>Owner</option>
                  <option>Dealer</option>
                </select>
              </div>
            </div>
          </div>

          {/* LOCATION PREVIEW (replaces the iframe, layout unchanged) */}
          <div className="pc-card">
            <h2 className="pc-sec-title">Location Preview</h2>
            <LocationMap
              center={center}
              position={position}
              setPosition={setPosition}
              height={360}
            />
            <p className="pc-note" style={{ marginTop: 10 }}>
              📍 Lat: {position[0].toFixed(6)}, Lng: {position[1].toFixed(6)}
            </p>
          </div>
        </section>

        {/* right: sticky summary */}
        <aside className="pc-right">
          <div className="pc-sticky">
            <div className="pc-summary">
              <h3>Estimated Price</h3>
              <div className="pc-price">{formatINR(estimate.price)}</div>
              <div className="pc-band">
                {formatINR(estimate.low)} – {formatINR(estimate.high)}
              </div>
              <p className="pc-sub">
                Est. rate: <strong>{formatINR(estimate.rate)}</strong> / sq ft
              </p>

              <button
                className="pc-cta"
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Get a detailed quote
              </button>

              <ul className="pc-points">
                <li>Instant, on-page calculation</li>
                <li>Adjust inputs to refine the band</li>
                <li>No sign-up required</li>
              </ul>
            </div>

            <div className="pc-tip">
              Tip: area &amp; city are the biggest drivers of the estimate. Try
              changing them first.
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

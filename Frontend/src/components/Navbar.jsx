import { Link, NavLink } from "react-router-dom";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { CITIES } from "../assets/cities";
import "./Navbar.css";

export default function Navbar() {
  // Which hover menu is open
  const [open, setOpen] = useState(null); // 'offerings' | 'design' | 'cities' | null

  // timers per menu for delayed close
  const timers = useRef({
    offerings: null,
    design: null,
    cities: null,
  });

  const clearMenuTimer = (id) => {
    if (timers.current[id]) {
      clearTimeout(timers.current[id]);
      timers.current[id] = null;
    }
  };

  const openMenu = (id) => {
    // cancel others
    Object.keys(timers.current).forEach((k) => clearMenuTimer(k));
    setOpen(id);
  };

  const closeMenuWithDelay = (id) => {
    clearMenuTimer(id);
    timers.current[id] = setTimeout(() => {
      if (open === id) setOpen(null);
    }, 150);
  };

  // ===== User (Login/Signup) popover (already robust) =====
  const [openUser, setOpenUser] = useState(false);
  const userTimer = useRef(null);
  const userRef = useRef(null);

  const userOpenNow = () => {
    if (userTimer.current) clearTimeout(userTimer.current);
    setOpenUser(true);
  };
  const userCloseWithDelay = () => {
    userTimer.current = setTimeout(() => setOpenUser(false), 150);
  };

  useEffect(() => {
    const onDocClick = (e) => {
      if (!userRef.current) return;
      if (!userRef.current.contains(e.target)) setOpenUser(false);
    };
    const onEsc = (e) => { if (e.key === "Escape") setOpenUser(false); };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header className="nav">
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/" className="brand" onMouseEnter={() => setOpen(null)}>
          <img src="/logo.png" alt="HomeAura" className="brand-mark" />
        </Link>

        {/* Left navigation */}
        <nav className="links">
          {/* How it works (simple link) */}
          <div className="menu">
            <NavLink to="/" end>How it works</NavLink>
          </div>

          {/* Offerings (hover dropdown with delay) */}
          <div
            className={`menu ${open === "offerings" ? "on" : ""}`}
            onMouseEnter={() => openMenu("offerings")}
            onMouseLeave={() => closeMenuWithDelay("offerings")}
          >
            <button className="menu-btn" type="button">Offerings ▾</button>
            {open === "offerings" && (
              <div
                className="dropdown"
                onMouseEnter={() => openMenu("offerings")}
                onMouseLeave={() => closeMenuWithDelay("offerings")}
              >
                <Link to="/interiors">Interiors</Link>
                <Link to="/furnishings">Furnishings</Link>
              </div>
            )}
          </div>

          {/* Price Calculators (simple anchor) */}
          {/* Price Calculators (route link) */}
          <div className="menu">
            <NavLink to="/price-calculator">Price Calculators</NavLink>
          </div>


          {/* // inside the <nav className="links"> block */}
          <div className="menu">
            <NavLink to="/modular-journey">The Modular Journey</NavLink>
          </div>

          {/* Design Ideas (hover mega with delay) */}
          <div
            className={`menu ${open === "design" ? "on" : ""}`}
            onMouseEnter={() => openMenu("design")}
            onMouseLeave={() => closeMenuWithDelay("design")}
          >
            <button className="menu-btn" type="button">Design Ideas ▾</button>
            {open === "design" && (
              <div
                className="mega"
                onMouseEnter={() => openMenu("design")}
                onMouseLeave={() => closeMenuWithDelay("design")}
              >
                <div>
                  <h4>Rooms</h4>
                  <a href="#living">Living Room</a>
                  <a href="#bedroom">Master Bedroom</a>
                  <a href="#kitchen">Modular Kitchen</a>
                  <a href="#bath">Bathroom</a>
                </div>
                <div>
                  <h4>Storage</h4>
                  <a href="#wardrobe">Wardrobes</a>
                  <a href="#tv">TV Units</a>
                  <a href="#foyer">Foyer</a>
                  <a href="#study">Study Room</a>
                </div>
                <div>
                  <h4>Finish & Decor</h4>
                  <a href="#false">False Ceiling</a>
                  <a href="#paint">Paint & Wallpaper</a>
                  <a href="#floor">Flooring</a>
                  <a href="#lighting">Lighting</a>
                </div>
              </div>
            )}
          </div>

          {/* Cities (hover mega with delay) */}
          <div
            className={`menu ${open === "cities" ? "on" : ""}`}
            onMouseEnter={() => openMenu("cities")}
            onMouseLeave={() => closeMenuWithDelay("cities")}
          >
            <button className="menu-btn" type="button">Cities ▾</button>
            {open === "cities" && (
              <div
                className="mega cities-grid"
                onMouseEnter={() => openMenu("cities")}
                onMouseLeave={() => closeMenuWithDelay("cities")}
              >
                {CITIES.map((c) => (
                  <a
                    key={c}
                    href={`#city-${c.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {c}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right: Login/Signup popover (already sticky) */}
        <div
          className="user"
          ref={userRef}
          onMouseEnter={userOpenNow}
          onMouseLeave={userCloseWithDelay}
        >
          <button
            className="user-btn"
            type="button"
            onClick={() => setOpenUser((v) => !v)}
            aria-haspopup="true"
            aria-expanded={openUser}
          >
            <span className="user-icon">👤</span>
            Login / Signup
          </button>

          {openUser && (
            <div
              className="user-menu"
              onMouseEnter={userOpenNow}
              onMouseLeave={userCloseWithDelay}
              role="menu"
            >
              <NavLink to="/login" className="user-item" role="menuitem">
                Log in
              </NavLink>
              <NavLink to="/signup" className="user-item" role="menuitem">
                Create account
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

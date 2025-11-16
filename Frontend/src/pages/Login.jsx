import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    alert("Demo login success");
    setLoading(false);
  };

  return (
    <>
      {/* Page-scoped background layer */}
      <div className="auth-bg" />

      <div className="login-wrap">
        <form className="login-card" onSubmit={onSubmit}>
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-sub">Login to your account to explore properties</p>

          <input
            className="input"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="row">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />{" "}
              Remember me
            </label>
            <a className="link" href="#">Forgot?</a>
          </div>

          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Log in"}
          </button>

          <button
            className="btn"
            type="button"
            onClick={() => alert("Google sign-in demo")}
            style={{ background: "rgba(255,255,255,0.18)" }}
          >
            Continue with Google
          </button>

          <button
            className="btn"
            type="button"
            onClick={() => alert("Apple sign-in demo")}
            style={{ background: "rgba(255,255,255,0.18)" }}
          >
            Continue with Apple
          </button>

          <p style={{ marginTop: 10, fontSize: 13 }}>
            Don’t have an account?{" "}
            <a className="link" href="/signup">Register</a>
          </p>
        </form>
      </div>
    </>
  );
}

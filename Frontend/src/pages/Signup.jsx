import { useState } from "react";
import "./Login.css";  // reuse glass card + background

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const canSubmit =
    name.trim() &&
    email.trim() &&
    password.length >= 6 &&
    confirm === password &&
    agree &&
    !loading;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    alert("Account created! (demo)");
    setName(""); setEmail(""); setPassword(""); setConfirm(""); setAgree(false);
    setLoading(false);
  };

  return (
    <>
      {/* Page-scoped background layer */}
      <div className="auth-bg" />

      <div className="login-wrap">
        <form className="login-card" onSubmit={onSubmit}>
          <h1 className="login-title">Create your account</h1>
          <p className="login-sub">Join HomeAura to explore properties</p>

          <input
            className="input"
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Create password (min 6)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />

          <input
            className="input"
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          <div className="row" style={{ alignItems: "flex-start" }}>
            <label style={{ display: "flex", gap: 8 }}>
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span>
                I agree to the{" "}
                <a className="link" href="#" onClick={(e)=>e.preventDefault()}>
                  Terms & Privacy
                </a>
              </span>
            </label>
          </div>

          <button className="btn" type="submit" disabled={!canSubmit}>
            {loading ? "Creating account..." : "Create account"}
          </button>

          <button
            className="btn"
            type="button"
            onClick={() => alert("Google signup demo")}
            style={{ background: "rgba(255,255,255,0.18)" }}
          >
            Continue with Google
          </button>

          <button
            className="btn"
            type="button"
            onClick={() => alert("Apple signup demo")}
            style={{ background: "rgba(255,255,255,0.18)" }}
          >
            Continue with Apple
          </button>

          <p style={{ marginTop: 10, fontSize: 13 }}>
            Already have an account?{" "}
            <a className="link" href="/login">Log in</a>
          </p>
        </form>
      </div>
    </>
  );
}

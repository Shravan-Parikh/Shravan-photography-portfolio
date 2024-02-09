import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        <i className="far fa-copyright" /> SHRAVAN {new Date().getFullYear()}
      </div>
      <div className="social-links">
        <a
          href="https://www.instagram.com/Ping_with_shr1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  );
}

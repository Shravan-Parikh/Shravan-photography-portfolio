import React from "react";

export default function MobileMenu(props) {
  const handleLinkClick = e => {
    const page = e.target.innerHTML;
    props.handleLinkClick(page);
  };

  return (
    <div className="mobile-menu">
      <ul>
        <li onClick={handleLinkClick}>WORK</li>
        <li onClick={handleLinkClick}>CONTACT</li>
        
        <li>
          <a
            onClick={handleLinkClick}
            href="https://www.instagram.com/Ping_with_shr1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li />
        <li />
      </ul>
    </div>
  );
}

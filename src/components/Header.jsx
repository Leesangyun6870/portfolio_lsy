import React from "react";
import "./Header.css";

const NAV_ITEMS = [
  { id: "about", label: "About Me" },
  { id: "project", label: "Project" },
  { id: "design", label: "Design" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="header">
      <nav className="header__nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className="header__link"
            onClick={() => handleScroll(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;

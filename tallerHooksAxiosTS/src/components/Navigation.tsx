import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav style={{ backgroundColor: "blue", color: "white", padding: "10px" }}>
      <ul style={{ listStyleType: "none", marginRight: "10px" }}>
        <li style={{ display: "inline", marginRight: "10px" }}>Home</li>
        <li style={{ display: "inline", marginRight: "10px" }}>About</li>
        <li style={{ display: "inline", marginRight: "10px" }}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;

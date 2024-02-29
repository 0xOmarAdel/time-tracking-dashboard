import { useState } from "react";
import avatar from "../assets/avatar.webp";

const links = [
  { id: 1, text: "Daily" },
  { id: 2, text: "Weekly" },
  { id: 3, text: "Monthly" },
];

const UserCard = () => {
  const [activeLink, setActiveLink] = useState(2);

  return (
    <div className="user-card">
      <div className="user-card-header">
        <div className="user-avatar-container">
          <img src={avatar} alt="user avatar" />
        </div>
        <div>
          <span>Report for</span>
          <span>
            Best <br className="xl-visible" /> Sales
          </span>
        </div>
      </div>
      <ul className="user-card-menu">
        {links.map((link) => (
          <li
            className={`user-card-link ${
              activeLink === link.id ? "active" : ""
            }`}
            onClick={() => setActiveLink(link.id)}
          >
            {link.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserCard;

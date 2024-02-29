import avatar from "../assets/avatar.png";

const UserCard = () => {
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
        <li className="user-card-link">Daily</li>
        <li className="user-card-link active">Weekly</li>
        <li className="user-card-link">Monthly</li>
      </ul>
    </div>
  );
};

export default UserCard;

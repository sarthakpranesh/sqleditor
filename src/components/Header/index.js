import "./index.css";

const Header = ({
  title,
}) => {
  return (
    <div className="navItemWrapper">
      <h2>{title}</h2>
    </div>
  );
};

export default Header;

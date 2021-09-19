import "./index.css";

const Header = ({
  title,
  onRun,
  onReset,
}) => {
  if (title !== "code") {
    return (
      <div className="navItemWrapper">
        <h3>{title.toUpperCase()}</h3>
      </div>
    )
  }

  return (
    <div className="navItemWrapper">
      <h3>{title.toUpperCase()}</h3>
      <div className="navItemBtnContainer">
        <button onClick={onRun}>RUN</button>
        <button onClick={onReset} style={{backgroundColor: "red"}}>RESET</button>
      </div>
    </div>
  );
};

export default Header;

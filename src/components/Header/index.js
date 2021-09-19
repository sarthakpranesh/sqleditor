import "./index.css";

const Header = ({
  title,
  onRun,
  onReset,
}) => {
  return (
    <div className="navItemWrapper">
      <h1>{title}</h1>
      <div className="navItemBtnContainer">
        <button onClick={onRun}>RUN</button>
        <button onClick={onReset} style={{backgroundColor: "red"}}>RESET</button>
      </div>
    </div>
  );
};

export default Header;

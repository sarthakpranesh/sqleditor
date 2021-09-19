import "./index.css"

const Container = ({className, children}) => {
  return (
    <div className={`containerStyle ${className}`}>
      {children}
    </div>
  );
};

export default Container;
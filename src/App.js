import './App.css';
import Container from "./components/Container";

const App = () => {
  return (
    <div className="App">
      <Container className="sideNav">
        Side Nav
      </Container>
      <Container className="sqlCommandEditor">
        Command Editor
      </Container>
      <Container className="dataViewer">
        Query Data Viewer
      </Container>
    </div>
  );
};

export default App;

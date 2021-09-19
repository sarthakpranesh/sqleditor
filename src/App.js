import './App.css';
import Container from "./components/Container";
import Header from './components/Header';
import Editor from './components/Editor';
import DataView from './components/DataView';

const App = () => {
  return (
    <div className="App">
      <Container className="sqlCommandEditor">
        <Header title="SQL Editor" />
        <Editor />
      </Container>
      <Container className="dataViewer">
        <DataView />
      </Container>
    </div>
  );
};

export default App;

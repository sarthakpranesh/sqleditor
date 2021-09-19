import * as React from "react";
import './App.css';
import Container from "./components/Container";
import Header from './components/Header';
import Editor from './components/Editor';
import DataView from './components/DataView';
import executeQuery from './services/SQL/executeQuery';
import checkQuery from "./services/SQL/checkQuery";

const App = () => {
  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const onRunQuery = () => {
    const errs = checkQuery(query);
    if (errs.length !== 0) {
      return setError(errs.join("\n"));
    }
    const [rawData, err] = executeQuery(query);
    console.log(rawData, err);
    if (err !== null) {
      setData(null);
      return setError(err);
    }
    setData(rawData);
    setError(null);
  }

  return (
    <div className="App">
      <Container className="sqlCommandEditor">
        <Header title="SQL Editor" onRun={onRunQuery} onReset={() => {
          setData(null);
          setError(null);
        }} />
        <Editor query={query} setQuery={setQuery} />
      </Container>
      <Container className="dataViewer">
        <DataView data={data} error={error} />
      </Container>
    </div>
  );
};

export default App;

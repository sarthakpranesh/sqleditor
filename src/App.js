import * as React from "react";
import './App.css';
import Container from "./components/Container";
import Header from './components/Header';
import Editor from './components/Editor';
import DataView from './components/DataView';
import executeQuery from './services/SQL/executeQuery';
import checkQuery from "./services/SQL/checkQuery";
import SideNavItem from "./components/SideNavItem";
import InitializeLocalStorage, { AddQueryToStorage } from "./services/storage/localStorage";
const History = React.lazy(() => import("./components/History"));

const App = () => {
  const [current, setCurrent] = React.useState("code");
  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const onRunQuery = (q) => {
    const errs = checkQuery(q);
    if (errs.length !== 0) {
      return setError(errs.join("\n"));
    }
    const [rawData, err] = executeQuery(q);
    if (err !== null) {
      setData(null);
      return setError(err);
    }
    setData(rawData);
    setError(null);
    AddQueryToStorage(q);
  }

  const renderCurrentView = () => {
    if (current === "code") {
      return <Editor query={query} setQuery={setQuery} />;
    } else if (current === "history") {
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <History onRun={onRunQuery} />
        </React.Suspense>
      )
    }
  }

  React.useEffect(() => {
    InitializeLocalStorage();
    const loadStop = new Date().getTime();
    console.log("Page Load Time(s):", (loadStop - window.loadStart)/1000)
  }, [])

  return (
    <div className="App">
      <Container className="sideNav">
        <SideNavItem name="code" onPress={() => setCurrent("code")} />
        <SideNavItem name="history" onPress={() => setCurrent("history")} />
        <SideNavItem name="settings" onPress={() => setCurrent("settings")} />
      </Container>
      <Container className="currentView">
        <Header
          title={current}
          onRun={() => onRunQuery(query)}
          onReset={() => {
            setData(null);
            setError(null);
          }}
        />
        {renderCurrentView()}
      </Container>
      <Container className="dataView">
        <DataView data={data} error={error} />
      </Container>
    </div>
  )
};

export default App;

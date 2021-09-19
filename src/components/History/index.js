import * as React from "react";
import {GetQueriesFromStorage, RemoveQueryFromStorage} from "../../services/storage/localStorage"

import "./index.css";

const History = ({
  onRun,
}) => {
  const [queries, setQueries] = React.useState([]);

  React.useEffect(() => {
    const q = GetQueriesFromStorage()
    setQueries(q);
  }, []);

  return (
    <div className="historyWrapper">
      <h4>All SQL commands executed</h4>
      {
        queries.map((query, i) => {
          return (
            <div className="historyCard" key={`${i}`}>
              <p>SQL: {query}</p>
              <div className="historyCardInner">
                <button onClick={() => {
                  navigator.clipboard.writeText(query)
                    .then(() => alert("Copied"))
                }} style={{backgroundColor: "white"}}>Copy</button>
                <button onClick={() => {
                  onRun(query)
                  const q = GetQueriesFromStorage()
                  setQueries(q);
                }}>Run</button>
                <button onClick={() => {
                  RemoveQueryFromStorage(i)
                  const q = GetQueriesFromStorage()
                  setQueries(q);
                }} style={{backgroundColor: "red"}}>Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default History;

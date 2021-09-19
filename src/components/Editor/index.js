import * as React from "react";

import "./index.css";
import formatQuery from "../../services/SQL/formatQuery";

const Editor = () => {
  const [query, setQuery] = React.useState("");

  const onQueryChange = (e) => {
    const unformattedQuery = e.target.value;
    const q = formatQuery(unformattedQuery);
    setQuery(q);
  }

  return (
    <div className="editorWrapper">
      <div className="editorLineNumber">
        {
          new Array(50).fill(1).map((_, i) => {
            return (
              <textarea
                readOnly={true}
                className="editorTextarea editorTextareaLined"
              >{i+1}</textarea>
            );
          })
        }
      </div>
      <textarea
        className="editorTextarea"
        rows="50"
        cols="1"
        autoFocus={true}
        style={{
          paddingLeft: 10,
        }}
        onChange={onQueryChange}
        value={query}
      >

      </textarea>
    </div>
  )
}

export default Editor;

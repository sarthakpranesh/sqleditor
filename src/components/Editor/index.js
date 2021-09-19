import "./index.css";

const Editor = () => {
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
      >

      </textarea>
    </div>
  )
}

export default Editor;

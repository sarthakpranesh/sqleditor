import "./index.css";

const DataView = ({
  data,
  error,
}) => {
  if (error !== null) {
    return (
      <div className="dataViewWrapper">
        <h3>Error Encountered</h3>
        <pre>
          {error}
        </pre>
        <p>or try: SELECT * FROM customers;</p>
      </div>
    )
  }

  if (data === null) {
    return (
      <div className="dataViewWrapper">
        <h3>Write your first query to get started!</h3>
        <pre>
          Or try out the below queries (which are only supported for demo)
        </pre>
        <kbd>SELECT * FROM customers;</kbd>
      </div>
    )
  }

  return (
    <div className="dataViewWrapper">
      <table>
        <thead>
          {
            data[0].map((thead) => <th>{thead}</th>)
          }
        </thead>
        <tbody>
          {
            data.slice(1).map((tr) => {
              return (
                <tr>
                  {
                    tr.map((data) => <td>{data}</td>)
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

DataView.defaultProps = {
  data: null,
  error: null,
}

export default DataView;

const InitializeLocalStorage = () => {
  const historyArr = localStorage.getItem("history");
  if (historyArr === null) {
    localStorage.setItem("history", JSON.stringify([]));
  }
}

export const AddQueryToStorage = (query) => {
  const historyArrJSON = localStorage.getItem("history");
  const historyArr = JSON.parse(historyArrJSON);
  historyArr.unshift(query);
  localStorage.setItem("history", JSON.stringify(historyArr));
}

export const RemoveQueryFromStorage = (index) => {
  const historyArrJSON = localStorage.getItem("history");
  const historyArr = JSON.parse(historyArrJSON);
  historyArr = historyArr.slice(0, index) + historyArr.slice(index+1);
  localStorage.setItem("history", JSON.stringify(historyArr));
}

export const GetQueriesFromStorage = () => {
  const historyArrJSON = localStorage.getItem("history");
  const historyArr = JSON.parse(historyArrJSON);
  return historyArr;
}

export default InitializeLocalStorage;
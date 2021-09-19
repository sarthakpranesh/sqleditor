const InitializeLocalStorage = () => {
  const historyArr = localStorage.getItem("history");
  if (historyArr === null) {
    localStorage.setItem("history", "");
  }
}

export const AddQueryToStorage = (query) => {
  let historyArr = GetQueriesFromStorage();
  historyArr = query + "###" + historyArr.join("###");
  localStorage.setItem("history", historyArr);
}

export const RemoveQueryFromStorage = (index) => {
  let historyArr = GetQueriesFromStorage();
  historyArr = [...historyArr.slice(0, index), ...historyArr.slice(index+1)];
  console.log(typeof historyArr);
  localStorage.setItem("history", historyArr.join("###"));
}

export const GetQueriesFromStorage = () => {
  const historyArrRaw = localStorage.getItem("history");
  const historyArr = historyArrRaw.split("###");
  return historyArr;
}

export default InitializeLocalStorage;
/*
    Mocking query execution with CSV data
*/
// MOCK - existing tables in database
const existingTables = {
  "customers": require("../raw/customers.json"),
};

const executeQuery = (query) => {
  const queryArray = query.trim().replaceAll(";", "").replaceAll(",", " ").split(" ");
  switch (queryArray[0].toLowerCase()) {
    case "select":
      const [table, err] = getTableData(queryArray);
      if (err !== null) {
        return [null, err];
      }
      const data = formatTableData(queryArray, table);
      return [data, null];
    default:
      // say not supported
      alert("SQL command not support, only select commands are supported!");
  }
}

const getTableData = (queryArray) => {
  const formIndex = queryArray.indexOf("FROM");
  const queryTable = queryArray[formIndex+1];
  if (!existingTables[queryTable]) {
    return [null, `Table "${queryTable}" not found`];
  }
  return [existingTables[queryTable], null];
}

const formatTableData = (queryArray, table) => {
  const indexOfSelect = queryArray.indexOf("SELECT");
  const indexOfFROM = queryArray.indexOf("FROM")
  const cols = queryArray.slice(indexOfSelect+1, indexOfFROM);
  const colKeys = Object.keys(table[0])
  let data = []
  if (cols.includes("*")) {
    data.push(colKeys);
    table.slice(1).forEach((r) => {
      data.push(Object.values(r));
    })
  } else {
    const aCols = cols.filter((c) => colKeys.includes(c))
    data = [aCols];
    table.slice(1).forEach((r) => {
      const d = aCols.map((c) => r[c])
      data.push(d);
    })
  }
  return data;
}

export default executeQuery;

const checkQuery = (query) => {
  let errors = [];
  const queryArray = query.trim().replace(";", "").split(" ");
  if (query.length === 0) {
    errors.push("Please input a SQL 'SELECT' query");
    return errors
  }
  if (query[query.length - 1] !== ';') {
    errors.push("Query should end with ';'");
  }
  if (queryArray[0].toLowerCase() !== "select") {
    errors.push("Only 'SELECT' command is available")
  }
  if (queryArray[0].toLowerCase() === "select" && queryArray[1].toLowerCase() === "from") {
    errors.push("No Data selectors, use '*' to select all columns")
  }
  return errors;
}

export default checkQuery;
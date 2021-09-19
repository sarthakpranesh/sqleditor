const sqlKeywords = ["add", "constraint", "alter", "column", "table", "all", "and", "any", "as", "asc", "backup", "database", "between", "case", "check", "create", "index", "procedure", "unique", "view", "default", "delete", "desc", "distinct", "drop", "exec", "foreign key", "from", "full outer join", "group by", "having", "in", "inner join", "insert into", "is null", "is not null", "order by", "outer join", "primary key", "select", "union", "union all", "update", "values", "where"];

const formatQuery = (query) => {
  const queryArray = query.split(" ");
  const formattedQueryArray = queryArray.map((q, i) => {
    if (sqlKeywords.includes(q) && i != queryArray.length - 1) {
      return q.toUpperCase()
    }
    return q;
  })
  return formattedQueryArray.join(" ");
};

export default formatQuery;

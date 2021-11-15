const parseQuery = queryString => {
  const searchParams = new URLSearchParams(queryString);
  const entries = searchParams.entries();

  let newObj = {};
  for (const entry of entries) {
    newObj = { ...newObj, [entry[0]]: entry[1] };
  }

  return newObj;
};

const stringifyQuery = obj => {
  const queries = [];
  for (const [key, value] of Object.entries(obj)) {
    queries.push(`${key}=${value}`);
  }

  return `?${queries.join('&')}`;
};

export { parseQuery, stringifyQuery };

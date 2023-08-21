export const searchByValue = (searchValue, setData) => {
  const mockData = localStorage.getItem("employees");
  const data = JSON.parse(mockData);

  const searchResults = [];

  const searchInObject = (obj, currentPath) => {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        searchNestedObject(obj, obj[key], [...currentPath, key]);
      } else if (
        String(obj[key]).toLowerCase().includes(searchValue.toLowerCase())
      ) {
        searchResults.push(obj); // Push the matching value instead of the entire object
        break;
      }
    }
  };

  const searchNestedObject = (parent, nestedObj, currentPath) => {
    for (const key in nestedObj) {
      if (typeof nestedObj[key] === "object") {
        searchNestedObject(nestedObj, nestedObj[key], [...currentPath, key]); // Fixed the recursive call arguments
      } else if (
        String(nestedObj[key]).toLowerCase().includes(searchValue.toLowerCase())
      ) {
        searchResults.push(parent); // Push the matching value instead of the entire object
        break;
      }
    }
  };

  for (const obj of data) {
    searchInObject(obj, []);
  }
  if (searchResults.length) setData(searchResults);
  return searchResults;
};

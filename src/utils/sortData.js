const sortData = (employees, key, setData, reverse) => {
  const sortedData = [...employees];

  sortedData.sort((a, b) => {
    if (key.includes(".")) {
      const nestedKey = key.split(".");
      if (a[nestedKey[0]][nestedKey[1]] < b[nestedKey[0]][nestedKey[1]])
        return -1;
      if (a[nestedKey[0]][nestedKey[1]] > b[nestedKey[0]][nestedKey[1]])
        return 1;
      return 0;
    } else {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    }
  });

  if (reverse) {
    sortedData.reverse();
  }

  setData(sortedData);
};

export default sortData;

import { useState } from "react";
import { useEffect } from "react";
import ArrowIcon from "../arrow-icon";
import sortData from "../../utils/sortData";

const TTitle = ({ name, sort, setData, activeSort, setActiveSort, data }) => {
  const [sortValue, setSortValue] = useState({ value: "", reverse: false });
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (name !== "N") {
      sortData(data, sort, setData, reverse);
      // console.log(data);
    }
  }, [sortValue]);

  return (
    <th style={styles.header}>
      {name !== "N" ? (
        <button
          onClick={() => {
            setSortValue({ value: sort, reverse: !reverse });
            setReverse(!reverse);
            setActiveSort(sort);
          }}
          style={styles.tableTitleBox}
        >
          <p>{name}</p>
          <ArrowIcon
            width="30"
            height="30"
            color={activeSort === sort ? "blue" : "#e7e7f1"}
            direction={activeSort !== sort ? "down" : reverse ? "down" : "up"}
          />
        </button>
      ) : (
        <p>{name}</p>
      )}
    </th>
  );
};
export default TTitle;

const styles = {
  header: {
    backgroundColor: "#f4f4f9",
    padding: "10px 20px",
    textAlign: "left",
    borderBottom: "1px solid #e2e2ee",
  },
  tableTitleBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0 8px",
    transform: "translateX(-8px)",
  },
};

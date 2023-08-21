import { useState } from "react";
import TTitle from "./TTitle";
import { useEffect } from "react";

const Table = ({ employees, dataShowLength, page }) => {
  const [activeSort, setActiveSort] = useState("");
  const [data, setData] = useState(employees);
  const [displayData, setDisplayData] = useState(null);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    setData(employees);
  }, [employees]);

  const handleTitles = () => {
    const titleBox = [];
    const keys = Object.keys(data[0]);
    keys.map((key) => {
      const item = {};
      item.name =
        key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");
      item.sort = key;
      item.isChild = false;
      if (typeof data[0][key] === "object") {
        item.isChild = true;
      }
      titleBox.push(item);
    });
    setTitles(titleBox);
    console.log(displayData);
  };

  useEffect(() => {
    handleTitles();
    setDisplayData(
      data.slice(dataShowLength * (page - 1), dataShowLength * page)
    );
  }, [page, dataShowLength, data]);

  if (!employees || !displayData || !titles) return;

  const sortedEmployees = displayData.map((item, index) => {
    const keys = Object.keys(item);
    const renderTd = keys.map((key) => {
      if (typeof item[key] !== "object") {
        return (
          <td style={styles.cell} key={key}>
            {item[key]}
          </td>
        );
      } else {
        const nestedKeys = Object.keys(item[key]);
        const renderChild = nestedKeys.map((child) => (
          <td style={styles.cell} key={child}>
            {item[key][child]}
          </td>
        ));
        return renderChild;
      }
    });
    // console.log(keys);
    return (
      <tr key={index} style={styles.row}>
        <td style={styles.cell}>{index + 1 + (page - 1) * dataShowLength}</td>
        {renderTd}
      </tr>
    );
  });

  return (
    <>
      {!displayData.length && <p>No results found :(</p>}

      <table style={styles.table}>
        <thead>
          <tr>
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="N"
            />
            <RenderTitles
              titles={titles}
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
            />
            {/* <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="First Name"
              sort="firstName"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="Last Name"
              sort="lastName"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="Start Date"
              sort="startDate"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="Department"
              sort="department"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="Date of Birth"
              sort="dateOfBirth"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="Street"
              sort="address.street"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="City"
              sort="address.city"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="State"
              sort="address.state"
            />
            <TTitle
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              data={data}
              setData={setData}
              name="Zip Code"
              sort="address.zipCode"
            /> */}
          </tr>
        </thead>
        <tbody>{sortedEmployees}</tbody>
      </table>
    </>
  );
};

export default Table;

const RenderTitles = ({ titles, data, activeSort, setActiveSort, setData }) => {
  return titles.map((title) => {
    if (title.isChild) {
      // console.log(title.sort);
      const subKeys = Object.keys(data[0][title.sort]);
      return subKeys.map((key, index) => (
        <TTitle
          key={index}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          data={data}
          setData={setData}
          name={`${
            key.charAt(0).toUpperCase() +
            key.slice(1).replace(/([A-Z])/g, " $1")
          }`}
          sort={`${title.sort}.${key}`}
        />
      ));
    } else {
      return (
        <TTitle
          key={title.sort}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          data={data}
          setData={setData}
          name={title.name}
          sort={title.sort}
        />
      );
    }
  });
};

// Example usage:

const styles = {
  table: {
    borderCollapse: "collapse",
    fontSize: 12,
    width: "100%",
  },
  header: {
    backgroundColor: "#f2f2f2",
    padding: "10px 20px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  row: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  cell: {
    padding: "10px 20px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  tableTitleBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0 8px",
    transform: "translateX(-8px)",
  },
};

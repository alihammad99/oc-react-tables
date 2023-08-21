import { useState } from "react";
import Table from "../components/table";
import { useEffect } from "react";
import { searchByValue } from "../utils/search";
import Header from "../components/employees-header";
import Footer from "../components/employees-footer";

const CurrentEmployees = ({ data }) => {
  const [showData, setShowData] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [dataShowLength, setDataShowLength] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchValue.length > 1) {
      searchByValue(searchValue, setShowData);
    } else {
      setShowData(data);
    }
  }, [searchValue]);

  useEffect(() => {
    setPage(1);
  }, [dataShowLength, searchByValue]);

  if (!showData || !data.length) return <p>404, Error! Not found data</p>;
  const pages = Math.ceil(showData.length / dataShowLength);
  return (
    <div style={styles.container}>
      <Header
        dataShowLength={dataShowLength}
        setDataShowLength={setDataShowLength}
        setSearchValue={setSearchValue}
      />
      <Table employees={showData} dataShowLength={dataShowLength} page={page} />
      <Footer page={page} setPage={setPage} pages={pages} />
    </div>
  );
};

export default CurrentEmployees;

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    margin: "0 auto",
    width: "100%",
  },
};

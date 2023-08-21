const Header = ({ dataShowLength, setDataShowLength, setSearchValue }) => {
  return (
    <div style={styles.box}>
      <div style={styles.headerBox}>
        <p>Show</p>
        <select
          value={dataShowLength}
          onChange={(e) => setDataShowLength(e.target.value)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <p>entries</p>
      </div>

      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Header;

const styles = {
  box: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    width: "92%",
    margin: 8,
    alignItems: "center",
  },
  headerBox: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
};

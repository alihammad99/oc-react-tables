const Footer = ({ page, setPage, pages }) => {
  const localData = localStorage.getItem("employees");
  return (
    <div style={styles.footerBox}>
      {localData && (
        <div style={styles.footerLeft}>
          <button
            onClick={() => {
              localStorage.removeItem("employees");
              window.location.reload();
            }}
            style={styles.dangerButton}
          >
            Delete Employees
          </button>
        </div>
      )}

      <div style={styles.footerRight}>
        <button
          onClick={() => {
            if (page - 1 > 0) setPage(page - 1);
          }}
        >
          Previous
        </button>
        <p>
          Page: {page}/{pages}
        </p>
        <button
          onClick={() => {
            if (page < pages) setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Footer;

const styles = {
  footerBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "94%",
    paddingBottom: 32,
    marginTop: 8,
  },
  footerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  footerRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    alignSelf: "flex-end",
  },
  dangerButton: { color: "#be0c36" },
};

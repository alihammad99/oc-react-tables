import CurrentEmployees from "./pages/current-employees";
function App() {
  const mockData = localStorage.getItem("employees");
  const employees = JSON.parse(mockData);
  return (
    <div style={styles.container}>
      <CurrentEmployees data={employees} />
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "100%",
  },
};

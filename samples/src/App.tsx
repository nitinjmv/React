import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Routing } from "./components/rounting/Index";

function App() {
  const personName = {
    first: "Nitin",
    last: "JMV",
  };

  const personNames = [
    { first: "john", last: "doe" },
    { first: "ram", last: "ram" },
    { first: "Jas", last: "singh" },
  ];

  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;

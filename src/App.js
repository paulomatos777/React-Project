import "./App.css";
import SayMyNAme from "./components/SayMyName";
import Person from "./components/Person";
import Phrase from "./components/Phrase";
import List from "./components/List";

function App() {
  const name = "Maria";
  return (
    <div className="App">
      <h1>Test css</h1>
      <Phrase />
      <Phrase />
      <List />
      <SayMyNAme name="Matheus" />
      <SayMyNAme name="André" />
      <SayMyNAme name={name} />
      <Person
        name="Rodrigo"
        age="28"
        work="Programador"
        photo="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;

import "./App.css";
import OtherLIst from "./components/OtherList";

function App() {
  const lista1 = ["React", "Vue", "Angular"];
  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OtherLIst itens={lista1} />
      <OtherLIst itens={[]} />
    </div>
  );
}

export default App;

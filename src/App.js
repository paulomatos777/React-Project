import "./App.css";

function App() {
  const name = "Matheus";
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150";
  return (
    <div className="App">
      <h1>olá React</h1>
      <h1>Meu primeiro App</h1>
      <p>OLá, {newName}</p>
      <p>Soma:{sum(1, 2)}</p>
      <img src={url} alt="Minha imagem" />
    </div>
  );
}

export default App;

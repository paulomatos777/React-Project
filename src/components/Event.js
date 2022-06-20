function Event({ numero }) {
  function myEvent() {
    console.log(`Opa, fui ativado ${numero}`);
  }
  return (
    <div>
      <p>Clique para disparar um evento:</p>
      <button onClick={myEvent}>Ativar</button>
    </div>
  );
}
export default Event;

import Button from "./event/Button";

function Event({ numero }) {
  function myEvent() {
    console.log(`Ativando primeiro avento`);
  }

  function secondEvent() {
    console.log("Ativando segundo evento");
  }

  return (
    <div>
      <p>Clique para disparar um evento:</p>
      <Button event={myEvent} text="Primeiro Evento" />
      <Button event={secondEvent} text="Segundo Evento" />
    </div>
  );
}
export default Event;

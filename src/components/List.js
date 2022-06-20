import Item from "./Item";
function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="ferrari" lancamento={1985} />
        <Item marca="BMW" lancamento={1964} />
        <Item marca="BMW" lancamento={1964} />
        <Item />
      </ul>
    </>
  );
}

export default List;

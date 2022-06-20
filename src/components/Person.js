function Person({ name, age, work, photo }) {
  return (
    <div>
      <img src={photo} alt={name} />
      <h2>name: {name}</h2>
      <p>age:{age}</p>
      <p>work: {work}</p>
    </div>
  );
}
export default Person;

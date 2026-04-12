function Child(props) {
  console.log(props);
  const name = props.name;
  const birthYear = props.birthYear;
  return (
    <h1>
      {name}-{birthYear}
    </h1>
  );
}
export default Child;

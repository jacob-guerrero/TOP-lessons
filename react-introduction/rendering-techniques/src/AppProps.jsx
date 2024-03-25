function ListItem(props) {
    return <li>{props.animal}</li>
}
  
function List(props) {
    return (
      <ul>
        {props.animals.map((animal) => {
          return <ListItem key={animal} animal={animal} />;
        })}
      </ul>
    );
}
  
function AppProps() {
    const animals = ["Fox", "Pig", "Monkey", "Dragon"];
  
    return (
      <div>
        <h1>More animals: </h1>
        <List animals={animals} />
      </div>
    );
}

export default AppProps
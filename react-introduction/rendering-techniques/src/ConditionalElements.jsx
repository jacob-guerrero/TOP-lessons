function List(props) {
  return (
    <>
      {!props.animals ? (
        <div>Loading...</div>
      ) : props.animals.length > 0 ? (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      ) : (
        <div>There are no animals on the list!</div>
      )}
    </>
  );
}

// or
/* function List(props) {
  return (
    <>
      {!props.animals && <div>Loading...</div>}
      {props.animals && props.animals.length > 0 && (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      )}
      {props.animals && props.animals.length === 0 && (
        <div>There are no animals in the list!</div>
      )}
    </>
  );
} */

function Drink({ name }) {
  const plant = {
    tea: {
      part: "leaf",
      content: "15–70 mg/cup",
      age: "4,000+ years",
    },
    coffee: {
      part: "bean",
      content: "80–185 mg/cup",
      age: "1,000+ years",
    },
  };

  const info = plant[name];
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.content}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}

function ConditionalElements() {
  const animals = [];

  return (
    <>
      <div>
        <h1>Maybe animals: </h1>
        <List animals={animals} />
      </div>
      <div>
        <h1>Drinks: </h1>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    </>
  );
}

export default ConditionalElements;

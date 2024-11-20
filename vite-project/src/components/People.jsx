import { useState, useRef } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";

export default function People() {
  const [people, setPeople] = useState([
    { id: 3, name: "Alice", sex: "female", hobby: "reading" },
    { id: 2, name: "Bob", sex: "female", hobby: "reading" },
    { id: 1, name: "Charlie", sex: "female", hobby: "reading" },
  ]);

  const inputRef = { useRef };

  const remove = (id) => {
    setPeople(people.filter((person) => person.id != id));
  };

  const add = (hobby) => {
    const id = people[0].id + 1;
    // need const :)
    setPeople([{ id, name: "hehe", sex: "female hehe", hobby }, ...people]);
    // setPeople needs an array
  };

  return (
    <div>
      <h1>People (my test)</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const hobby = inputRef.current.value;
          hobby && add(hobby);
        }}
      >
        <input type="text" ref={inputRef} />
        <button>Add</button>
        {/* No need to put onClick as there is already onSubmit within the form */}
      </form>
      {/* <TextField />
      <Button variant="contained">Add</Button> */}
      {people.map((person) => (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <div key={person.id}>
              <h2>{person.name}</h2>
              <p>Sex: {person.sex}</p>
              <p>Hobby: {person.hobby}</p>
              <button onClick={() => remove(person.id)}>Del</button>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* <button onClick={}>Delete</button> */}
    </div>
  );
}

import { useState, useRef } from "react";

import Header from "./components/Header";
import Item from "./components/Item";
import Lizard from "./components/Lizard";
import Form from "./Form";

import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import People from "./components/People";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  const inputRef = useRef();

  const [posts, setPosts] = useState([
    { id: 3, content: "Some content", user: "Alice" },
    { id: 2, content: "More content", user: "Alice" },
    { id: 1, content: "Another content", user: "Bob" },
  ]);

  const add = (content, name) => {
    const id = posts[0].id + 1;
    setPosts([{ id, content, user: name }, ...posts]);
  };

  const remove = (id) => {
    setPosts(posts.filter((post) => post.id != id));
  };

  return (
    <div>
      <Header />
      <Container sx={{ mt: 4 }} maxWidth="md">
        <h1
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Foodie
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              width: 32,
              height: 32,
              borderRadius: 50,
              border: "0 none",
              background: showForm ? "#dc3545" : "#0d6efd",
              color: "white",
            }}
          >
            {showForm ? "×" : "+"}
          </button>
        </h1>
        {showForm && <Form add={add} />}
        {/* Conditional rendering */}
        <form
          style={{ marginBottom: 20, display: "flex" }}
          onSubmit={(e) => {
            e.preventDefault();

            const content = inputRef.current.value;
            content && add(content);

            e.currentTarget.reset();
          }}
        >
          {/* <input type="text" style={{ flexGrow: 1 }} ref={inputRef} /> */}
          <TextField
            type="text"
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            style={{ flexGrow: 1 }}
            inputRef={inputRef}
          />
          {/* <button>Add</button> */}
          <Button variant="contained" type="submit">
            Contained
          </Button>
        </form>

        {posts.map((post) => (
          <Item key={post.id} post={post} remove={remove} />
          // key is only needed here, it's not needed to reuse in the Item component for Virtual DOM
        ))}

        <People />

        <Lizard />
      </Container>
    </div>
  );
}

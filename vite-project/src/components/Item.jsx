import { Card, CardContent } from "@mui/material";

export default function Item({ post, remove }) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <a href="#" style={{ float: "right" }} onClick={() => remove(post.id)}>
          {" "}
          {/* onClick needs to be a function, so instead of just onClick=
          {remove(post.id)} we need to write onClick={() => remove(post.id)} */}
          Del
        </a>
        <b>{post.user}</b>
        <div>{post.content}</div>
      </CardContent>
    </Card>
  );
}

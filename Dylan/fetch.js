fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => console.log(data));

//Posting
fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  body: JSON.stringify({
    name: "Comment 105",
    email: "udeme@abc.com",
    body: "Make my first post request",
    postId: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

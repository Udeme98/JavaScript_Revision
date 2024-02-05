const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

//mimicking getting a data from a server
function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//creating a post
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error, Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPost)
//   .catch((err) => console.log(err));

//Promise All
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );
//const promise4 = fetch("https://jsonplaceholder.typicode.com/users");

// Promise.all([promise1, promise2, promise3]).then(
//   (values) => console.log(values) //returns an array
// );

//Async / Await
async function init() {
  await createPost({ title: "Post Three", body: "This is post three" });

  getPost();
}
init();

//fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = res.json();

  console.log(data);
}
fetchUsers();

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
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback(); //should be called right after the push is called on
  }, 2000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPost);

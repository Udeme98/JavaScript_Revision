//example

const photos = [];

async function photoUpload() {
  let uploadStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      photos.push("My Photo");
      resolve("Photo Uploaded");
    }, 3000);
  });

  let result = await uploadStatus;

  console.log(result);
  console.log(photos.length);
}

// photoUpload();

//Challenge
// Print on the console a random joke from the Chuck Morris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

//solution - using fetch
fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => console.log(data.value));

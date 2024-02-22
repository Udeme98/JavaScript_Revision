// create a promise that returns some user data and throws an error when the data is not found.

const userData = new Promise((resolve, reject) => {
  const error = true;

  if (error) {
    reject("No user data found");
  } else {
    resolve({
      name: "Udeme",
      country: "Nigeria",
      email: "udeme@abc.com",
    });
  }
});

userData.then((data) => console.log(data)).catch((err) => console.log(err));

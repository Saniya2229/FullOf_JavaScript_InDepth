function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data shared successfully");
      } else {
        reject("Error to fetching data.");
      }
    }, 2000);
  });
}

fetchdata()
  .then((data) => {
    console.log(data);
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

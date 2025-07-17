function fethchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Lily", url: "https://chaicode.com" });
    }, 3000);
  });
}

async function getUserdata() {
  try {
    console.log(`Fethching user data...`);
    const userData = await fethchUserData();
    console.log("User data;", userData);
  } catch (error) {
    console.log("Error fethching data", error);
  }
}
getUserdata();

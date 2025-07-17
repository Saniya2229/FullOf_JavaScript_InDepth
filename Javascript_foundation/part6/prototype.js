let computer = {
  cpu: 12,
};
let lenovo = {
  screen: "HD",
  __proto__: computer,
};

console.log(`lenovo`, lenovo.__proto__);

//  We wan to access the properties so we can you the getProperty method instead of using the __prototype__

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla `, Object.getPrototypeOf(tesla));

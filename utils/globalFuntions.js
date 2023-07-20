export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(emailRegex.test(email));
  return emailRegex.test(email);
};

// handle changes

export const handleInputChange = (field, value, setFormData) => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    [field]: value,
  }));
};

//

export const coffeeInfo = [
  {
    name: "Americano",
    img: require("../assets/img/americano.png"),
  },
  {
    name: "Cappuccino",
    img: require("../assets/img/capuchino.png"),
  },
  {
    name: "Mocha",
    img: require("../assets/img/mocha.png"),
  },
  {
    name: "Flat White",
    img: require("../assets/img/flat.png"),
  },
];

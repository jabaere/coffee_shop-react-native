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
    price: "3$",
    id: 1,
  },
  {
    name: "Cappuccino",
    img: require("../assets/img/capuchino.png"),
    price: "5$",
    id: 2,
  },
  {
    name: "Mocha",
    img: require("../assets/img/mocha.png"),
    price: "3$",
    id: 3,
  },
  {
    name: "Flat White",
    img: require("../assets/img/flat.png"),
    price: "2$",
    id: 4,
  },
];

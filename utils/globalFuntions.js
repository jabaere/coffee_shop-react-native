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

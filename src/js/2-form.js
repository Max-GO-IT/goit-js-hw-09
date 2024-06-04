const formData = {
    email: "",
    message: "",
  };
  
  const form = document.querySelector(".feedback-form");
  const localStorageKey = "feedback-form-state";
  
  window.addEventListener("load", () => {
    const storedFeedback = localStorage.getItem(localStorageKey);
    if (storedFeedback) {
      formData = JSON.parse(storedFeedback);
      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    }
  });
  
  form.addEventListener("input", (evt) => {
    formData[evt.target.name] = evt.target.value; // Обновляем объект formData
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });
  
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    localStorage.removeItem(localStorageKey);
    formData.email = ""; 
    formData.message = "";
    form.reset();
  });
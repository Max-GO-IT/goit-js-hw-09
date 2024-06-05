let formData = {
    email: "",
    message: "",
  };
  
  const form = document.querySelector(".feedback-form");
  const localStorageKey = "feedback-form-state";
  
  window.addEventListener("load", () => {
    const storedFeedback = localStorage.getItem(localStorageKey);
    if (storedFeedback) {
      formData = JSON.parse(storedFeedback);
     // if (formData.email!=""){
      form.elements.email.value = formData.email;
    //  }
    //  else{
    //    form.elements.email.value = "Fill please all fields";
     // }

     
     
    //  if (formData.message!=""){
        form.elements.message.value = formData.message;
    //    console.log(`message1= ${formData.message}`)
   //     }
    //    else{
    //      form.elements.message.value = "Fill please all fields";
    //      console.log(`message2= ${formData.message}`)
   //     }
  
    }
  });
  
  form.addEventListener("input", (evt) => {
    formData[evt.target.name] = evt.target.value; 
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });
  
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (formData.email === "" || formData.message === "") {
      alert("Fill please all fields"); 
      return;
    }


    localStorage.removeItem(localStorageKey);
    formData.email = ""; 
    formData.message = "";
    form.reset();
  });
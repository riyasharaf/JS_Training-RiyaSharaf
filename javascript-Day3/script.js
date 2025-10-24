const theme = document.getElementById("theme");
const body = document.body;
const preftheme = localStorage.getItem("theme");

if (preftheme === "dark") {
  body.classList.add("dark-mode");
  theme.textContent = "Switch to Light Mode";
} else {
  theme.textContent = "Switch to Dark Mode";
}

window.addEventListener("load", () => {
  displayEntries();
});

theme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    theme.textContent = "Switch to Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    theme.textContent = "Switch to Dark Mode";
  }
});


function validateName() {
  const name = document.getElementById("name").value.trim();
  const error = document.getElementById("nameError");
  error.innerText = "";

  if (!name) {
    error.innerText = "Name can't be empty.";
  } else if (name.length < 2) {
    error.innerText = "Name must be greater than 2 characters.";
  } else if (name.length > 50) {
    error.innerText = "Name must be smaller than 50 characters.";
  }

  return error.innerText === "";
}

function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("emailError");
  const data1 = JSON.parse(localStorage.getItem("entries")) || [];
  error.innerText = "";


  let sameemail = false;
  for (let i = 0; i < data1.length; i++) {
    if (data1[i].email.toLowerCase() === email.toLowerCase()) {
      sameemail = true;
      break;
    }
  }

  if (sameemail) {
    error.innerText = "This email is already registered.";
    return;
  }

  if (email === "") {
    error.innerText = "Email is required.";
  } 
  else if (!email.includes("@") || !email.endsWith(".com")) {
    error.innerText = "Enter a valid Gmail address.";
  } 
  else {
    error.innerText = "";
  }

  return error.innerText === "";
}

function validateAge() {
  const age = Number(document.getElementById("age").value);
  const error = document.getElementById("ageError");
  error.innerText = "";

  if (!age) error.innerText = "Age is required.";
  else if (age < 1 || age > 120) error.innerText = "Age must be between 1 to 120.";

  return error.innerText === "";
}

function validateDOB() {
  const dob = document.getElementById("birth").value;
  const error = document.getElementById("birthError");
  const today = new Date();
  error.innerText = "";

  if (!dob) {
    error.innerText = "Birthdate can't be empty.";
  } else {
    const enteredDate = new Date(dob); 
    if (enteredDate > today) {
      error.innerText = "Birthdate can't be in the future.";
    }
  }

  return error.innerText === "";
}

document.getElementById("name").addEventListener("input", validateName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("age").addEventListener("input", validateAge);
document.getElementById("birth").addEventListener("change", validateDOB);


function SubmitData(event) {
  event.preventDefault();

  document.querySelectorAll(".error").forEach(e => e.innerText = "");

  let nameValid = validateName();
  let emailValid = validateEmail();
  let ageValid = validateAge();
  let dobValid = validateDOB();

  let gender = document.querySelector("input[name='gender']:checked");
  let hobbies = document.querySelectorAll("input[name='hobbies']:checked");
  let country = document.getElementById("country").value;

  let a = nameValid && emailValid && ageValid && dobValid;

  if (!gender) {
    document.getElementById("genderError").innerText = "Select your gender.";
    a = false;
  }
  if (hobbies.length === 0) {
    document.getElementById("hobbiesError").innerText = "Select at least one hobby.";
    a = false;
  }
  if (country === "") {
    document.getElementById("countryError").innerText = "Select your country.";
    a = false;
  }

  if (!a) return;

  let hobbyList = [];
  for (let i = 0; i < hobbies.length; i++) {
    hobbyList.push(hobbies[i].value);
  }

  let user = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    age: Number(document.getElementById("age").value),
    dob: document.getElementById("birth").value,
    gender: gender.value,
    hobbies: hobbyList,
    country,
  };

  let data = JSON.parse(localStorage.getItem("entries")) || [];
  data.push(user);
  localStorage.setItem("entries", JSON.stringify(data));
  document.getElementById("userdetForm").reset();

  displayEntries();
}

function displayEntries() {
  const displayBox = document.getElementById("displayBox");
  const data = JSON.parse(localStorage.getItem("entries")) || [];

  displayBox.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    displayBox.innerHTML += `<pre>${JSON.stringify(data[i], null, 2)}</pre><hr>`;
  }
}

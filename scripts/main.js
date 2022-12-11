const sink = document.querySelector('[data-validation-outlet]');
const confirmationBanner = document.querySelector('.confirmation-banner');
const button = document.querySelector('[data-validation-button]');
const inputs = document.querySelectorAll('[data-required-input]');
const radioBttns = document.querySelectorAll('[data-required-radiobttn]');
let radioBttn;

const allInputFields = {};

button.addEventListener('click', handleClick);

function handleClick(e) {
  e.preventDefault(); //stops auto refresh//
  validateInputs();
  getRadioBttn();
  if (inputs[0].value && inputs[1].value && radioBttn && inputs[2].value) {
    confirmationBanner.classList.remove('visibileBanner');
    sink.innerText = `Thank you for contacting us, ${
      inputs[0].value.charAt(0).toUpperCase() + inputs[0].value.slice(1)
    }!`;
    allInputFields['First name'] =
      inputs[0].value.charAt(0).toUpperCase() + inputs[0].value.slice(1);
    allInputFields['Last name'] =
      inputs[1].value.charAt(0).toUpperCase() + inputs[1].value.slice(1);
    allInputFields['Gender'] = radioBttn;
    allInputFields['Message'] =
      inputs[2].value.charAt(0).toUpperCase() + inputs[2].value.slice(1);
    console.log(allInputFields);
  } else {
    confirmationBanner.classList.add('visibileBanner');
  }
}

function getRadioBttn() {
  for (const radio of radioBttns) {
    if (radio.checked) {
      radioBttn = radio.value;
    }
  }
}

function validateInputs() {
  for (const input of inputs) {
    input.classList.toggle('invalid', !input.value);
  }
}

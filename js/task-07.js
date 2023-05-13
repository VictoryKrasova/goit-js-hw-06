const inputEl = document.getElementById("font-size-control")
const spanEl = document.getElementById("text")

// inputEl.addEventListener('input', handleInputRange)

// function handleInputRange(event) {
//     spanEl.style.fontSize = event.currentTarget.value + "px"; 
// }



const handleInputRange = ({ currentTarget }) =>
  (spanEl.style.fontSize = `${currentTarget.value}px`);

  inputEl.addEventListener('input', handleInputRange);




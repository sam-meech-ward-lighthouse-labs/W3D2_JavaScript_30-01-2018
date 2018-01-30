let form = document.querySelector('#food-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get the data from the form
  const foodField = document.querySelector('#food-field');
  const food = foodField.value;

  // Get the list we're going to append to
  const tastesBadList = document.querySelector('#tastesBad');

  // Create the new element
  const foodListItem = document.createElement('li');
  foodListItem.innerText = food;

  // Append that element to the list
  tastesBadList.appendChild(foodListItem);

  foodListItem.addEventListener('click', (event) => {
    // Remove it from the html
    foodListItem.remove();
    event.cancelBubble = true;
    console.log(event);
  })

  // Send an http request to a server somewhere saving the food data somehow
});

document.addEventListener('click', (event) => {
  console.log("🤗");
});
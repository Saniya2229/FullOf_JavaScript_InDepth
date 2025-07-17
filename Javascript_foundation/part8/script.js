// example1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is changed";
  });

//example2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citieslist = document.getElementById("citiesList");
    citieslist.firstElementChild.classList.add("highlight");
  });

// example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeOrder");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "pink";
  coffeeType.style.padding = "5px";
});

// example 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// example5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

//  example6

document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("Lily");
  });

//  example7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});

// example8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });

//   example9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// example10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptiontext = document.getElementById("descriptionText");
    descriptiontext.classList.toggle("highlight");
  });

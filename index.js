let input = document.querySelector("input");
let btn = document.querySelector("button");
let lists = document.querySelector("ol");

btn.addEventListener("click", function () {
  if (input.value !== "") {
    let newList = document.createElement("li");
    let newLine = document.createElement("hr");

    newList.innerHTML = input.value;
    lists.append(newList);
    lists.append(newLine);
    input.value = "";

    // delete button for new lists
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("taskDel");
    deleteBtn.innerText = "X";
    newList.appendChild(deleteBtn);
  }
});

// Delete button Logic
lists.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    let hrElement = listItem.nextElementSibling; // Get the next element (horizontal ruler)
    listItem.remove();
    hrElement.remove();
  }
});

// Enter keyboard button works as save button
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    btn.click();
  }
});

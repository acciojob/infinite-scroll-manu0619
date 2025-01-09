// Select the ordered list element
let list = document.querySelector("ol");

// Function to add list items to the list
function addItems(count) {
  let currentItems = list.children.length;
  for (let i = 1; i <= count; i++) {
    let li = document.createElement("li");
    li.textContent = `Item ${currentItems + i}`;
    list.appendChild(li);
  }
}

// Add 10 initial items to the list
addItems(10);

// Add scroll event listener to detect when the user scrolls to the bottom of the list
list.addEventListener("scroll", () => {
  // Check if the user has scrolled to the bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(5); // Add 2 more items
  }
});

const rightSection = document.querySelector(".right__container");
const container = document.querySelector(".scetch");
const btn = document.querySelector(".start");
const del = document.querySelector(".delete");
const count = document.querySelector("input");
const demoCount = document.querySelector(".demo");

container.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => {
  createPixels(); // Call function to create pixels
  btn.disabled = true;
});

container.addEventListener("mousemove", (e) => {
  let target = e.target;
  console.log(target.className);
  if (target.className === "box" && e.which === 1) {
    //если класс box и если нажата левая клавиша мыши
    target.style.background = "red";
  }
});

del.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    console.log(box);
    box.style.background = "none";
  });
});

// Initialize count value
count.value = 16;
demoCount.textContent = 256;

// Event listener for count input change
count.addEventListener("input", countPixel);

// Function to create pixels and adjust grid
function createPixels() {
  container.innerHTML = ""; // Clear existing pixels
  const gridSize = 544; // Total size of the grid container
  const pixelSize = gridSize / parseInt(count.value); // Calculate size of each pixel
  for (let i = 0; i < Math.pow(parseInt(count.value), 2); i++) {
    const pixel = document.createElement("div");
    pixel.className = "box";
    pixel.style = `height: ${pixelSize}px; width: ${pixelSize}px; border: 1px solid #000;`;
    container.appendChild(pixel);
  }
  // Adjust grid size dynamically
  container.style.gridTemplateColumns = `repeat(${count.value}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${count.value}, 1fr)`;
}

// Function to update pixel count
function countPixel() {
  demoCount.textContent = count.value ** 2;
  createPixels(); // Call function to create pixels and adjust grid
}

// Call countPixel initially to set up the grid
// countPixel();

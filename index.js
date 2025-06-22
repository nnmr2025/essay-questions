
    const liElements = document.querySelectorAll("ol li");
    const liArray = Array.from(liElements);
    const randomIndex = Math.floor(Math.random() * liArray.length);
    const randomElement = liArray[randomIndex];
    document.querySelector("#randomQuestion h3").textContent=
    document.querySelector("#randomQuestion h3").textContent + " " + (randomIndex + 1);
    document.querySelector("#randomQuestion #here").innerHTML =
      randomElement.innerHTML;

    document
      .getElementById("copyButton")
      .addEventListener("click", function () {
        const textToCopy = document.querySelector(
          "#randomQuestion #here"
        ).textContent;
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        textarea.style.position = "fixed";
        textarea.style.opacity = 0;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Text copied to clipboard!");
      });

      
      
      

function loadScript(url, callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.defer = true;
  script.onload = callback;
  document.head.insertBefore(script, document.head.firstChild);
}

// Function to take a screenshot and copy it to the clipboard
function takeScreenshot() {
  html2canvas(document.getElementById('randomQuestion')).then(canvas => {
      // Convert the canvas to a blob
      canvas.toBlob(blob => {
          // Create a new ClipboardItem
          const item = new ClipboardItem({ 'image/png': blob });
          // Write the item to the clipboard
          navigator.clipboard.write([item]).then(() => {
              alert('Screenshot copied to clipboard!');
          }).catch(err => {
              console.error('Could not copy image: ', err);
          });
      });
  });
}
// Create a button element
const  button = document.createElement("button");
button.id = "screenshotButton";

button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/></svg>';
button.style = "all: unset; cursor: pointer;padding: 20px;  background-color: #007bff; color: white;";
var container = document.querySelector("#randomQuestion + button");
container.insertAdjacentElement('afterend', button);


loadScript('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js', function() {
  document.getElementById('screenshotButton').addEventListener('click', takeScreenshot);
});


function createNavbar() {
  var navLinks = [
    { text: "Home", url: "index.html" },
    { text: "Book Essay", url: "bookEssay.html" },
    { text: "Book Letter", url: "bookLetter.html" },
    { text: "Discussion Questions", url: "discussionQuestions.html" },
    { text: "Double Question", url: "doubleQuestion.html" }
  ];

  var navbar = document.createElement("div");
  navbar.classList.add("navbar");

  navLinks.forEach(function(linkData) {
    var link = document.createElement("a");
    link.textContent = linkData.text;
    link.href = linkData.url;
    navbar.appendChild(link);
  });

  document.body.insertBefore(navbar, document.body.firstChild);
}
document.addEventListener("DOMContentLoaded", function() {
  createNavbar();
});


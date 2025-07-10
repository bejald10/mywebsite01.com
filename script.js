Java Scrip

// Load messages on page load
window.onload = function () {
  loadMessages();
};


function saveMessage() {
  const messageBox = document.getElementById("message");
  const message = messageBox.value.trim();

  if (message === "") {
    alert("Please enter a message before clicking the button.");
    return;
  }

  const timestamp = new Date().toLocaleString();
  const saved = JSON.parse(localStorage.getItem("messages") || "[]");

  const newEntry = { text: message, time: timestamp };
  saved.push(newEntry);

  localStorage.setItem("messages", JSON.stringify(saved));
  messageBox.value = "";

  displayMessage(newEntry);
}



function loadMessages() {
  const saved = JSON.parse(localStorage.getItem("messages") || "[]");
  saved.forEach(displayMessage);
}

function displayMessage(entry) {
  const displayDiv = document.getElementById("savedMessages");
  const msg = document.createElement("div");
  msg.style.marginTop = "10px";
  msg.style.padding = "10px";
  msg.style.border = "1px solid #ccc";
  msg.style.borderRadius = "5px";
  msg.style.backgroundColor = "#fff";

  msg.innerHTML = `<strong>${entry.time}</strong><br>${entry.text}`;
  displayDiv.appendChild(msg);
}

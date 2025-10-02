// In-memory account storage
let accounts = {};
let accountCounter = 1;

function showMessage(msg) {
  document.getElementById("output").innerText = msg;
}

function openAccount() {
  const name = prompt("Enter your name:");
  const pin = prompt("Set a 4-digit PIN:");
  const accountId = "A" + String(accountCounter++).padStart(4, "0");

  accounts[accountId] = {
    owner: name,
    pin: pin,
    balance: 0
  };

  showMessage(`Account created! ID: ${accountId}, Owner: ${name}, Balance: $0.00`);
}

function deposit() {
  const id = prompt("Enter account ID:");
  const pin = prompt("Enter PIN:");

  if (!accounts[id] || accounts[id].pin !== pin) {
    showMessage("Invalid account or PIN.");
    return;
  }

  const amount = parseFloat(prompt("Enter amount to deposit (USD):"));
  if (isNaN(amount) || amount <= 0) {
    showMessage("Invalid amount.");
    return;
  }

  accounts[id].balance += amount;
  showMessage(`Deposit successful. New balance: $${accounts[id].balance.toFixed(2)}`);
}

function withdraw() {
  const id = prompt("Enter account ID:");
  const pin = prompt("Enter PIN:");

  if (!accounts[id] || accounts[id].pin !== pin) {
    showMessage("Invalid account or PIN.");
    return;
  }

  const amount = parseFloat(prompt("Enter amount to withdraw (USD):"));
  if (isNaN(amount) || amount <= 0) {
    showMessage("Invalid amount.");
    return;
  }

  if (accounts[id].balance < amount) {
    showMessage("Insufficient funds.");
    return;
  }

  accounts[id].balance -= amount;
  showMessage(`Withdrawal successful. New balance: $${accounts[id].balance.toFixed(2)}`);
}

function quitBank() {
  document.getElementById("app").innerHTML = `
    <h1>🏦 MiniBankJS</h1>
    <p>Thank you for using MiniBank!</p>
  `;
}

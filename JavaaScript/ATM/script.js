let username = document.getElementById("username");
let password = document.getElementById("password");
let transaction = document.getElementById("transaction");
let amount = document.getElementById("amount");
let submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", function() {
    const user = username.value;
    const pwd = password.value;
    const type = transaction.value;
    const amt = amount.value;
    
    if (user && pwd && amt) {
        console.log(`User: ${user}, Type: ${type}, Amount: ${amt}`);
        // Add your ATM logic here
    } else {
        alert("Please fill in all fields");
    }
});

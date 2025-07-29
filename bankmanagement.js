var users = [];

function Bank_Account() {
    return prompt(
        "Select an option:\n" +
        "1: Create User\n" +
        "2: Deposit Amount\n" +
        "3: Withdraw Amount\n" +
        "4: Delete Account\n" +
        "5: Exit"
    );
}

function Create_User() {
    var name = prompt("Enter Name:");
    var id = prompt("Enter ID:");
    var phone = Number(prompt("Enter Phone Number:"));
    var deposit = Number(prompt("Enter Deposit Amount:"));

    for (var i = 0; i < users.length; i++) {
        if (users[i].id === id || users[i].phone === phone) {
            alert("ID or Phone number already exists!");
            return;
        }
    }

    var user = {
        name: name,
        id: id,
        phone: phone,
        balance: deposit
    };

    users.push(user);
    alert("User created successfully.");
}

function Deposit_Amount() {
    var id = prompt("Enter ID:");
    var phone = prompt("Enter Phone Number:");
    var amount = Number(prompt("Enter amount to deposit:"));

    for (var i = 0; i < users.length; i++) {
        if (users[i].id === id && users[i].phone === phone) {
            users[i].balance += amount;
            alert("Amount deposited. New Balance: " + users[i].balance);
            return;
        }
    }

    alert("Account not found!");
}

function Withdraw_Amount() {
    var id = prompt("Enter ID:");
    var phone = prompt("Enter Phone Number:");
    var amount = Number(prompt("Enter amount to withdraw:"));

    for (var i = 0; i < users.length; i++) {
        if (users[i].id === id && users[i].phone === phone) {
            if (users[i].balance >= amount) {
                users[i].balance -= amount;
                alert("Amount withdrawn. New Balance: " + users[i].balance);
            } else {
                alert("Insufficient balance!");
            }
            return;
        }
    }

    alert("Account not found!");
}

function Delete_Account() {
    var id = prompt("Enter ID:");
    var phone = prompt("Enter Phone Number:");

    for (var i = 0; i < users.length; i++) {
        if (users[i].id === id && users[i].phone === phone) {
            users.splice(i, 1);
            alert("Account deleted successfully.");
            return;
        }
    }

    alert("Account not found!");
}

function ACC() {
    var choice = "";
    while (choice !== "5") {
        choice = Bank_Account();

        switch (choice) {
            case "1":
                Create_User();
                break;
            case "2":
                Deposit_Amount();
                break;
            case "3":
                Withdraw_Amount();
                break;
            case "4":
                Delete_Account();
                break;
            case "5":
                alert("Exiting....");
                break;
            default:
                alert("Invalid choice....");
        }
    }
}

ACC();





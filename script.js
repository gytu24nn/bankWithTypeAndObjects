// Hämtar knappar från HTML för att komma till logga in eller skapa konto formulären.
var loginBtn = document.getElementById("loginBtn");
var createAccountBtn = document.getElementById("createAccountBtn");
// Hämtar de olika elementen till formulären.
var loginPage = document.getElementById("loginPage");
var createAccountPage = document.getElementById("createAccountPage");
// element i logg in forumläret som kommer användas i klasserna senare
var userNameInput = document.getElementById("userName");
var userPasswordInput = document.getElementById("userPassword");
var BtnLoggaIn = document.getElementById("BtnLoggaIn");
//Element till meny page där det olika alternativen som användaren kan välja mellan finns
var menyPage = document.getElementById("menyPage");
var balanceBtn = document.getElementById("balance");
var depositBtn = document.getElementById("deposit");
var withdrawBtn = document.getElementById("withdraw");
var logOutBtn = document.getElementById("logOut");
//Element från HTML till despoitpage
var depositMoneyForm = document.getElementById("depositMoneyForm");
var depositMoneyInput = document.getElementById("depositMoneyInput");
var saveDepositBtn = document.getElementById("saveDepositBtn");
//element från HTML till withdraw
var withdrawMoneyForm = document.getElementById("withdrawMoneyForm");
var withdrawMoneyInput = document.getElementById("withdrawMoneyInput");
var saveWithdrawBtn = document.getElementById("saveWithDrawBtn");
// Lägger till klick-händelse för att visa login-formuläret.
loginBtn.addEventListener("click", function () {
    loginPage.classList.remove("hide");
});
var User = /** @class */ (function () {
    function User(initicalBalnce) {
        if (initicalBalnce === void 0) { initicalBalnce = 0; }
        this.balance = initicalBalnce;
    }
    User.prototype.getBalance = function () {
        return this.balance;
    };
    User.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            var paragraftDepositText = document.createElement("p");
            paragraftDepositText.innerHTML = "Du satte in ${amount} kr";
        }
        else {
            alert("beloopet måste vara större än 0");
        }
    };
    User.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            var paragrafWithdrawText = document.createElement("p");
            paragrafWithdrawText.innerHTML = "du tog ut ${amount} kr";
        }
        else if (amount > this.balance) {
            alert("Det belopp du försökte ta ut är förstort. Testa att sätt in pengar först");
        }
        else {
            alert("Ditt belopp måste vara sötrre än 0.");
        }
    };
    return User;
}());
var Bank = /** @class */ (function () {
    function Bank(userName, userPassword) {
        this.userName = userName;
        this.userPassword = userPassword;
    }
    Bank.prototype.loggin = function () {
        var _this = this;
        BtnLoggaIn.addEventListener("click", function () {
            var inputUserName = userNameInput.value;
            var inputUserPassword = userPasswordInput.value;
            if (_this.userName == inputUserName && _this.userPassword == inputUserPassword) {
                console.log("klick");
                loginPage.classList.add("hide");
                menyPage.classList.remove("hide");
                loginBtn.classList.add("hide");
                createAccountBtn.classList.add("hide");
            }
            else {
                alert("Du skrev in fel användarnamn eller lösenord! Försök igen!");
            }
        });
    };
    Bank.prototype.loggout = function () {
        logOutBtn.addEventListener("click", function () {
            loginPage.classList.remove("hide");
            menyPage.classList.add("hide");
            loginBtn.classList.remove("hide");
            createAccountBtn.classList.remove("hide");
            userNameInput.value = "";
            userPasswordInput.value = "";
        });
    };
    return Bank;
}());
var bankUser = new Bank("test", "1234");
bankUser.loggin();
bankUser.loggout();

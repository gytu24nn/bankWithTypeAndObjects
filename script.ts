// Hämtar knappar från HTML för att komma till logga in eller skapa konto formulären.
const loginBtn = document.getElementById("loginBtn") as HTMLButtonElement;
const createAccountBtn = document.getElementById("createAccountBtn") as HTMLButtonElement;

// Hämtar de olika elementen till formulären.
const loginPage = document.getElementById("loginPage") as HTMLDivElement;
const createAccountPage = document.getElementById("createAccountPage") as HTMLDivElement;

// element i logg in forumläret som kommer användas i klasserna senare
const userNameInput = document.getElementById("userName") as HTMLInputElement;
const userPasswordInput = document.getElementById("userPassword") as HTMLInputElement;
const BtnLoggaIn = document.getElementById("BtnLoggaIn") as HTMLButtonElement;

//Element till meny page där det olika alternativen som användaren kan välja mellan finns
const menyPage = document.getElementById("menyPage") as HTMLDivElement;
const balanceBtn = document.getElementById("balance") as HTMLHeadingElement;
const depositBtn = document.getElementById("deposit") as HTMLHeadingElement;
const withdrawBtn = document.getElementById("withdraw") as HTMLHeadingElement;
const logOutBtn = document.getElementById("logOut") as HTMLHeadingElement;

//Element från HTML till despoitpage
const depositMoneyForm = document.getElementById("depositMoneyForm") as HTMLDivElement;
const depositMoneyInput = document.getElementById("depositMoneyInput") as HTMLInputElement;
const saveDepositBtn = document.getElementById("saveDepositBtn") as HTMLButtonElement;

//element från HTML till withdraw
const withdrawMoneyForm = document.getElementById("withdrawMoneyForm") as HTMLDivElement;
const withdrawMoneyInput = document.getElementById("withdrawMoneyInput") as HTMLInputElement;
const saveWithdrawBtn = document.getElementById("saveWithDrawBtn") as HTMLButtonElement;

// Lägger till klick-händelse för att visa login-formuläret.
loginBtn.addEventListener("click", () => {
    loginPage.classList.remove("hide");
});

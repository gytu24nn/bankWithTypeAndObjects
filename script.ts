// Hämtar knappar från HTML för att komma till logga in eller skapa konto formulären.
const loginBtn = document.getElementById("loginBtn") as HTMLButtonElement;
const createAccountBtn = document.getElementById("createAccountBtn") as HTMLButtonElement;

// Hämtar de olika elementen till formulären.
const loginPage = document.getElementById("loginPage") as HTMLDivElement;
const createAccountPage = document.getElementById("createAccountPage") as HTMLDivElement;

// Lägger till klick-händelse för att visa login-formuläret.
loginBtn.addEventListener("click", () => {
    loginPage.classList.remove("hide");
});

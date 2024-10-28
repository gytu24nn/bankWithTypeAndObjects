// Hämtar knappar från HTML för att komma till logga in eller skapa konto formulären.
var loginBtn = document.getElementById("loginBtn");
var createAccountBtn = document.getElementById("createAccountBtn");
// Hämtar de olika elementen till formulären.
var loginPage = document.getElementById("loginPage");
var createAccountPage = document.getElementById("createAccountPage");
// Lägger till klick-händelse för att visa login-formuläret.
loginBtn.addEventListener("click", function () {
    loginPage.classList.remove("hide");
});

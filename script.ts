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

//element för att skapa ett konto
const newUserNameInput = document.getElementById("newUserName") as HTMLInputElement;
const newUserPassword = document.getElementById("newPassword") as HTMLInputElement;
const BtncreateAccount = document.getElementById("BtnCreateAccount") as HTMLInputElement;

//Element till meny page där det olika alternativen som användaren kan välja mellan finns
const menyPage = document.getElementById("menyPage") as HTMLDivElement;
const balanceBtn = document.getElementById("balance") as HTMLHeadingElement;
const depositBtn = document.getElementById("deposit") as HTMLHeadingElement;
const withdrawBtn = document.getElementById("withdraw") as HTMLHeadingElement;
const logOutBtn = document.getElementById("logOut") as HTMLHeadingElement;
const balanceDisplay = document.getElementById("balanceDisplay") as HTMLParagraphElement;

//Element från HTML till despoitpage
const depositMoneyForm = document.getElementById("depositMoneyForm") as HTMLDivElement;
const depositMoneyInput = document.getElementById("depositMoneyInput") as HTMLInputElement;
const saveDepositBtn = document.getElementById("saveDepositBtn") as HTMLButtonElement;

//element från HTML till withdraw
const withdrawMoneyForm = document.getElementById("withdrawMoneyForm") as HTMLDivElement;
const withdrawMoneyInput = document.getElementById("withdrawMoneyInput") as HTMLInputElement;
const saveWithdrawBtn = document.getElementById("saveWithdrawBtn") as HTMLButtonElement;

// Lägger till klick-händelse för att visa login-formuläret.
loginBtn.addEventListener("click", () => {
    loginPage.classList.remove("hide");
});

BtncreateAccount.addEventListener("click", () => {
    createAccountPage.classList.remove("hide");
})

class User {
     private balance: number

    public constructor(initicalBalnce: number = 0) {
        this.balance = initicalBalnce;
    }

    public getBalance(): number {
        return this.balance;
    }

    public deposit(amount: number): void {
        if (amount > 0 ) {
            this.balance += amount;
            let paragraftDepositText = document.createElement("p");
            paragraftDepositText.innerHTML = `Du satte in ${amount} kr`;
            depositMoneyForm.appendChild(paragraftDepositText);
        } else {
            alert("beloopet måste vara större än 0");
        }
    }

    public withdraw(amount: number): void {
        if(amount > 0 && amount <= this.balance ) {
            this.balance -= amount;
            let paragrafWithdrawText = document.createElement("p");
            paragrafWithdrawText.innerHTML = `du tog ut ${amount} kr`;
            withdrawMoneyForm.appendChild(paragrafWithdrawText);

        } else if(amount > this.balance) {
            alert("Det belopp du försökte ta ut är förstort. Testa att sätt in pengar först");
        } else {
            alert("Ditt belopp måste vara sötrre än 0.");
        }
    }


}

class Bank {
    userName: string
    userPassword: string

    constructor(userName: string, userPassword: string) {
        this.userName = userName;
        this.userPassword = userPassword;
    }

    public loggin() {
        BtnLoggaIn.addEventListener("click", () => {
        const inputUserName = userNameInput.value;
        const inputUserPassword = userPasswordInput.value;

        if (this.userName == inputUserName && this.userPassword == inputUserPassword) {
            console.log("klick");
            loginPage.classList.add("hide"); 
            menyPage.classList.remove("hide");
            loginBtn.classList.add("hide");
            createAccountBtn.classList.add("hide");
            

        } else {
            alert("Du skrev in fel användarnamn eller lösenord! Försök igen!")
        }
    });
    }

    public loggout() {
            userNameInput.value = "";
            userPasswordInput.value = "";

    }
}

const bankUser = new Bank("test", "1234")
const user = new User(0);

balanceBtn.addEventListener("click", () => {
    depositMoneyForm.classList.add("hide");
    withdrawMoneyForm.classList.add("hide");
    balanceDisplay.classList.remove("hide");
    const balance = user.getBalance();
    const balanceMessage = `Ditt saldo är: ${balance} kr`;
    balanceDisplay.textContent = balanceMessage;
})

depositBtn.addEventListener("click", () => {
    depositMoneyForm.classList.remove("hide");
    withdrawMoneyForm.classList.add("hide")
    balanceDisplay.classList.add("hide");
    
})

saveDepositBtn.addEventListener("click", () => {
    const addBalance = Number(depositMoneyInput.value)
    user.deposit(addBalance);
    depositMoneyInput.value = "";
})

withdrawBtn.addEventListener("click", () => {
    withdrawMoneyForm.classList.remove("hide");
    depositMoneyForm.classList.add("hide");
    balanceDisplay.classList.add("hide"); 
})

saveWithdrawBtn.addEventListener("click", () => {
    const subtractBalance = Number(withdrawMoneyInput.value)
    user.withdraw(subtractBalance)
    withdrawMoneyInput.value = ""
})

logOutBtn.addEventListener("click", () => {
    bankUser.loggout();
    loginPage.classList.remove("hide");
    menyPage.classList.add("hide");
    loginBtn.classList.remove("hide");
    createAccountBtn.classList.remove("hide");

})


BtnLoggaIn.addEventListener("click", () => {
    bankUser.loggin();
    loginPage.classList.add("hide"); 
    menyPage.classList.remove("hide");
    loginBtn.classList.add("hide");
    createAccountBtn.classList.add("hide");
});

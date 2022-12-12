(function (app) {
    app.PageLogin = {
        draw: function () {
            let divElementMain = createMainDiv();
            let textLogin = createTextLogin();
            let inputElementEmail = createInputEmail();
            let textEmail = createTextEmail();
            let inputPassword = createInputPassword();
            let textPassword = createTextPassword();
            let exitButton = createButtonExit();
            let registerButton = createButtonRegistr();
            // registerButton.addEventListener("click", goToRegister);
            // exitButton.addEventListener("click", goToExit);
            divElementMain.append(
                textLogin,
                inputElementEmail,
                inputPassword,
                registerButton,
                exitButton,
                textPassword,
                textEmail);
        }
    }

    function createMainDiv() {
        let content = document.querySelector(".content");
        let divElementMain = document.createElement("div");
        divElementMain.classList.add("contentForm")
        content.append(divElementMain);
        return divElementMain;
    }

    function createTextLogin() {
        let divElementExit = document.createElement("div");
        divElementExit.append(document.createTextNode("Вход"));
        divElementExit.classList.add("pageLoginForm");
        return divElementExit;
    }

    function createInputEmail() {
        let emailField = document.createElement("input");
        emailField.classList.add("email-input");
        emailField.setAttribute("name", "email");
        return emailField;
    }

    function createTextEmail() {
        let divElementEmailText = document.createElement("div");
        let textEmail = document.createTextNode("E-mail");
        divElementEmailText.append(textEmail);
        divElementEmailText.classList.add("email");
        return divElementEmailText;
    }

    function createInputPassword() {
        let passwordField = document.createElement("input");
        passwordField.classList.add("password-input");
        passwordField.setAttribute("name", "password")
        return passwordField;
    }

    function createTextPassword() {
        let textEmailDiv2 = document.createElement("div");
        let texEmail2 = document.createTextNode("Пароль");
        textEmailDiv2.append(texEmail2)
        textEmailDiv2.classList.add("password");
        return textEmailDiv2;
    }

    function createButtonRegistr() {
        let registerButton = document.createElement("button");
        registerButton.classList.add("registerButton");
        registerButton.append(document.createTextNode("Зарегистрироваться"));
        return registerButton
    }

    function createButtonExit() {
        let exitButton = document.createElement("button");
        exitButton.classList.add("exitButton");
        exitButton.append(document.createTextNode("Войти"));
        return exitButton;
    }

    // function goToRegister() {
    //
    // }
    // function goToExit() {
    // }

})(AdsBoard);


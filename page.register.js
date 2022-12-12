(function (app) {
    app.PageRegister = {
        draw: function () {
            let content = document.querySelector(".content");
            let divElementMain = createMainDiv();
            const textRegistr = createTextRegistr();
            let inputElementEmail = createInputEmail();
            const textEmail = createTextEmail();
            let inputElementPhone = createInputPhone();
            const textPhone = createTextPhone();
            let inputPassword = createInputPassword();
            let textPassword = createTextPassword();
            let inputPasswordСonfirm = createInputPasswordСonfirm();
            let textPasswordСonfirm = createTextPasswordСonfirm();
            let exitButton = createButtonExit();
            let registerButton = createButtonRegistr();
            exitButton.addEventListener("click", goToExit);

            divElementMain.append(
                textRegistr,
                inputElementEmail,
                inputElementPhone,
                textPhone,
                textEmail,
                inputPassword,
                textPassword,
                inputPasswordСonfirm,
                textPasswordСonfirm,
                exitButton,
                registerButton
            )
        }
    }

    function createMainDiv() {
        let content = document.querySelector(".content");
        let divElementMain = document.createElement("div");
        divElementMain.classList.add("contentForm")
        content.append(divElementMain);
        return divElementMain;
    }

    function createTextRegistr() {
        let divElementExit = document.createElement("div");
        divElementExit.append(document.createTextNode("Регистрация"));
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

    function createInputPhone() {
        let emailField = document.createElement("input");
        emailField.classList.add("inputPhone");
        emailField.setAttribute("name", "phone");
        return emailField;
    }

    function createTextPhone() {
        let divElementEmailText = document.createElement("div");
        let textEmail = document.createTextNode("Телефон");
        divElementEmailText.append(textEmail);
        divElementEmailText.classList.add("phoneText");
        return divElementEmailText;
    }

    function createInputPassword() {
        let passwordField = document.createElement("input");
        passwordField.classList.add("password-input-register");
        passwordField.setAttribute("name", "password")
        return passwordField;
    }

    function createTextPassword() {
        let textEmailDiv2 = document.createElement("div");
        let texEmail2 = document.createTextNode("Пароль");
        textEmailDiv2.append(texEmail2)
        textEmailDiv2.classList.add("password-register");
        return textEmailDiv2;
    }

    function createInputPasswordСonfirm() {
        let passwordField = document.createElement("input");
        passwordField.classList.add("password-input-confirm");
        return passwordField;
    }

    function createTextPasswordСonfirm() {
        let textEmailDiv2 = document.createElement("div");
        let texEmail2 = document.createTextNode("Подтвердите пароль");
        textEmailDiv2.append(texEmail2)
        textEmailDiv2.classList.add("password-confirm-text");
        return textEmailDiv2;
    }

    function createButtonRegistr() {
        let registerButton = document.createElement("button");
        registerButton.classList.add("registerButtonText");
        registerButton.append(document.createTextNode("Зарегистрироваться"));
        return registerButton
    }

    function createButtonExit() {
        let exitButton = document.createElement("button");
        exitButton.classList.add("exitButtonText");
        exitButton.append(document.createTextNode("Войти"));
        return exitButton;
    }

    function goToExit() {
        document.querySelector(".content").innerHTML = "";
        AdsBoard.PageLogin.draw();
    }

})(AdsBoard);


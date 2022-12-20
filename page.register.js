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
            registerButton.addEventListener("click", goToRegister);

            divElementMain.append(
                textRegistr,
                inputElementEmail,
                inputElementPhone,
                inputPassword,
                textPhone,
                textEmail,
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
        divElementExit.setAttribute("name", "login");
        divElementExit.classList.add("pageLoginForm");
        return divElementExit;
    }

    function createInputEmail() {
        let emailField = document.createElement("input");
        emailField.classList.add("email-input");
        emailField.setAttribute("name", "email");
        emailField.setAttribute("type", "text");
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
        emailField.setAttribute("type", "number");
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
        passwordField.setAttribute("type", "text")
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

    function goToRegister(event) {
        event.preventDefault();
        let formData = new FormData();
        let email = document.querySelector(".email-input").value
        let phone = document.querySelector(".inputPhone").value
        let password = document.querySelector(".password-input-register").value
        if (email !== "" && phone !== "" && password !== "") {
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('password', password);
            fetch("upload.php", {
                method: 'POST',
                body: formData,
            }).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    document.querySelector(".content").innerHTML = "";
                    return AdsBoard.PageAds.draw()
                }

            })
        } else {
            alert("Не все поля заполнены")
            return AdsBoard.PageRegister.draw();
        }
    }

})(AdsBoard);


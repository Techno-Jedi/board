(function (app) {
    app.PageRegister = {
        draw: function () {
            app.Header.draw("");
            let content = document.querySelector(".content");
            let divElementMain       = createMainDiv();
            const textRegistr        = createTextRegistr();
            let inputElementEmail    = createInputEmail();
            const textEmail          = createTextEmail();
            let inputElementPhone    = createInputPhone();
            const textPhone          = createTextPhone();
            let inputPassword        = createInputPassword();
            let textPassword         = createTextPassword();
            let inputPasswordСonfirm = createInputPasswordСonfirm();
            const textPasswordСonfirm  = createTextPasswordСonfirm();

            let exitButton     = createButtonExit();
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
        let div = document.createElement("div");
        div.classList.add("contentForm");
        content.append(div);

        return div;
    }
    function createTextRegistr() {
        let div = document.createElement("div");
        div.append(document.createTextNode("Регистрация"));
        div.setAttribute("name", "login");
        div.classList.add("pageLoginForm");

        return div;
    }
    function createInputEmail() {
        let input = document.createElement("input");
        input.classList.add("email-input");
        input.setAttribute("name", "email");
        input.setAttribute("type", "text");

        return input;
    }
    function createTextEmail() {
        let div = document.createElement("div");
        let textEmail = document.createTextNode("E-mail");
        div.append(textEmail);
        div.classList.add("email");

        return div;
    }
    function createInputPhone() {
        let input = document.createElement("input");
        input.classList.add("inputPhone");
        input.setAttribute("name", "phone");
        input.setAttribute("type", "number");

        return input;
    }
    function createTextPhone() {
        let div = document.createElement("div");
        let textEmail = document.createTextNode("Телефон");
        div.append(textEmail);
        div.classList.add("phoneText");

        return div;
    }
    function createInputPassword() {
        let input = document.createElement("input");
        input.classList.add("password-input-register");
        input.setAttribute("name", "password");
        input.setAttribute("type", "text");

        return input;
    }
    function createTextPassword() {
        let div = document.createElement("div");
        let texEmail2 = document.createTextNode("Пароль");
        div.append(texEmail2);
        div.classList.add("password-register");

        return div;
    }
    function createInputPasswordСonfirm() {
        let input = document.createElement("input");
        input.classList.add("password-input-confirm");

        return input;
    }
    function createTextPasswordСonfirm() {
        let div = document.createElement("div");
        let texEmail2 = document.createTextNode("Подтвердите пароль");
        div.append(texEmail2);
        div.classList.add("password-confirm-text");

        return div;
    }
    function createButtonRegistr() {
        let button = document.createElement("button");
        button.classList.add("registerButtonText");
        button.append(document.createTextNode("Зарегистрироваться"));

        return button;
    }
    function createButtonExit() {
        let button = document.createElement("button");
        button.classList.add("exitButtonText");
        button.append(document.createTextNode("Войти"));

        return button;
    }
    function goToExit() {
        document.querySelector(".content").innerHTML = "";
        document.querySelector(".header").innerHTML = "";
        AdsBoard.PageLogin.draw();
    }
    function goToRegister(event) {
        event.preventDefault();
        let formData  = new FormData();
        let email     = document.querySelector(".email-input").value;
        let phone     = document.querySelector(".inputPhone").value;
        let password  = document.querySelector(".password-input-register").value;
        if (email    !== "" &&
            phone    !== "" &&
            password !== "") {
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('password', password);

            fetch("php/upload.php", {
                method: 'POST',
                body: formData,
            })
                .then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    document.querySelector(".content").innerHTML = "";

                    return AdsBoard.PageAds.draw();
                }
            })
        } else {
            alert("Не все поля заполнены");
            document.querySelector(".content").innerHTML = "";
            document.querySelector(".header").innerHTML  = "";

            return AdsBoard.PageRegister.draw();
        }
    }
})(AdsBoard);


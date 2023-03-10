(function (app) {
app.PageLogin = {
    draw: function () {
        app.Header.draw("");
        let divElementMain = createMainDiv();
        let textLogin = createTextLogin();
        let inputElementEmail = createInputEmail();
        let textEmail = createTextEmail();
        let inputPassword = createInputPassword();
        let textPassword = createTextPassword();
        let exitButton = createButtonExit();
        let registerButton = createButtonRegistr();

        divElementMain.append(
            textLogin,
            inputElementEmail,
            inputPassword,
            registerButton,
            exitButton,
            textPassword,
            textEmail
        );
        registerButton.addEventListener("click", goToRegister);
        exitButton.addEventListener("click", goToExit);
    }
}
function createMainDiv() {
    let content = document.querySelector(".content");
    let div = document.createElement("div");
    div.classList.add("contentForm");
    content.append(div);

    return div;
}
function createTextLogin() {
    let div = document.createElement("div");
    div.append(document.createTextNode("Вход"));
    div.classList.add("pageLoginForm");
    div.setAttribute("name", "login");

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
function createInputPassword() {
    let div = document.createElement("input");
    div.classList.add("password-input");
    div.setAttribute("name", "password");
    div.setAttribute("type", "text");

    return div;
}
function createTextPassword() {
    let div       = document.createElement("div");
    let texEmail2 = document.createTextNode("Пароль");
    div.append(texEmail2);
    div.classList.add("password");

    return div;
}
function createButtonRegistr() {
    let button = document.createElement("button");
    button.classList.add("registerButton");
    button.append(document.createTextNode("Зарегистрироваться"));

    return button
}
function createButtonExit() {
    let button = document.createElement("button");
    button.classList.add("exitButton");
    button.append(document.createTextNode("Войти"));

    return button;
}
function goToRegister() {
    document.querySelector(".content").innerHTML = "";
    document.querySelector(".header").innerHTML  = "";

    AdsBoard.PageRegister.draw();
}
function goToExit(event){
    event.preventDefault();
    let formData = new FormData();
    let email    = document.querySelector(".email-input").value;
    let password = document.querySelector(".password-input").value;
    if (email !== "" && password !== "") {
        formData.append('email', email);
        formData.append('password', password);
        fetch("upload.php", {
            method: 'POST',
            body: formData,
        }).then(response => response.json())
          .then(function (response) {
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML  = "";
                localStorage.setItem('user', response);

                return  AdsBoard.PageMyAds.draw(response);
              })
    } else {
        alert("Не все поля заполнены или пароль не верный");
        document.querySelector(".content").innerHTML = "";
        document.querySelector(".header").innerHTML  = "";

        return AdsBoard.PageLogin.draw();
    }
}
})(AdsBoard);


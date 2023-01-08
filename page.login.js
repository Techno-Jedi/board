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
            textEmail);
        registerButton.addEventListener("click", goToRegister);
        exitButton.addEventListener("click", goToExit);


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
    divElementExit.setAttribute("name", "login");
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

function createInputPassword() {
    let passwordField = document.createElement("input");
    passwordField.classList.add("password-input");
    passwordField.setAttribute("name", "password")
    passwordField.setAttribute("type", "text")
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

function goToRegister() {
    document.querySelector(".content").innerHTML = "";
    document.querySelector(".header").innerHTML = "";
    AdsBoard.PageRegister.draw();
}

function goToExit(event) {
    event.preventDefault();
    let formData = new FormData();
    let email = document.querySelector(".email-input").value;
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
                document.querySelector(".header").innerHTML = "";
                console.log("user_id = ", response);
                return  AdsBoard.PageMyAds.draw(response);
        // fetch("uploadForm.php", {
        //             method: 'GET',
        //         })
        //             .then(response => response.json())
        //             .then(function (response) {
        //                     document.querySelector(".header").innerHTML = "";
        //                     document.querySelector(".content").innerHTML = "";
        //                 app.Header.draw("");
        //                 app.Header2.draw("");
        //                     // AdsBoard.PageMyAds.draw();
        //                     console.log(response[0])
        //                     for (let i = 0; i < response.length; i++) {
        //                         function createMainDiv() {
        //                             let content = document.querySelector(".content");
        //                             let divElementMains = document.createElement("div");
        //                             divElementMains.classList.add("boardAds");
        //                             content.append(divElementMains);
        //                             let divElementMain = document.createElement("div");
        //                             divElementMain.classList.add("imageDescriptionPrice")
        //                             divElementMains.append(divElementMain);
        //                             let imagesAndPhone = document.createElement("div");
        //                             imagesAndPhone.classList.add("imagesAndPhone");
        //                             let img = document.createElement("div");
        //                             img.classList.add("image");
        //                             imagesAndPhone.append(img)
        //
        //                             let descriptionDivAndSalesman = document.createElement("div");
        //                             descriptionDivAndSalesman.classList.add("description-salesman");
        //                             let descriptionDiv = document.createElement("div");
        //                             let descriptionP = document.createElement("p");
        //                             descriptionDiv.append(descriptionP);
        //                             descriptionP.innerHTML = response[i].description;
        //                             descriptionDiv.classList.add("description");
        //                             descriptionDivAndSalesman.append(descriptionDiv);
        //
        //                             let changePriceAndChange = document.createElement("div");
        //                             changePriceAndChange.classList.add("priceAndChange");
        //                             divElementMain.append(changePriceAndChange);
        //
        //                             let change = document.createElement("div");
        //                             change.classList.add("DeleteAndChange");
        //
        //                             let divElementPhone = document.createElement("div");
        //
        //                             divElementPhone.classList.add("change");
        //                             divElementPhone.setAttribute("dataset-test", response[i].id)
        //
        //                             let elementP = document.createElement("p");
        //                             elementP.append(document.createTextNode("Изменитьt"));
        //                             divElementPhone.append(elementP);
        //                             change.append(divElementPhone);
        //                             changePriceAndChange.append(change);
        //
        //                             let divElement = document.createElement("div");
        //                             divElement.classList.add("delete")
        //                             let paragraphElement = document.createElement("p")
        //                             paragraphElement.append(document.createTextNode("Удалить"));
        //                             divElement.append(paragraphElement);
        //                             change.append(divElement)
        //
        //                             let priceDiv = document.createElement("div");
        //                             priceDiv.append(document.createTextNode(""));
        //                             priceDiv.classList.add("price");
        //                             priceDiv.innerHTML = response[i].price
        //                             changePriceAndChange.append(priceDiv);
        //
        //                             divElementMain.append(imagesAndPhone, descriptionDivAndSalesman, changePriceAndChange)
        //                             return divElementMain;
        //                         }
        //                         console.log(document.querySelector(".change"), response[i].id)
        //
        //                         createMainDiv();
        //                     }
        //                 }
        //             );
            })
    } else {
        alert("Не все поля заполнены или пароль не верный");
        document.querySelector(".content").innerHTML = "";
        document.querySelector(".header").innerHTML = "";
        return AdsBoard.PageLogin.draw();
    }

}
})(AdsBoard);


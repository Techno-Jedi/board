(function (app) {
    app.Header = {
        draw: function (a) {
            let header = document.querySelector(".header")
            let divElementMain = createMainDiv();
            header.append(
                divElementMain,
            );
        }
    }
    app.Header2 = {
        draw: function (a) {
            let header = document.querySelector(".header");
            let headerRight = createHeaderRight();
            let nav = createNav();

            header.append(
                nav,
                headerRight
            );
            let addAds = document.querySelector(".add");
            addAds.addEventListener("click", add)
            let ribbonHeader = document.querySelector(".ribbon");
            ribbonHeader.addEventListener("click", ribbon);

            let adsHeader = document.querySelector(".MyAds");
            adsHeader.addEventListener("click", ads);

            let menuBtn = document.querySelector('.burger');
            let menu = document.querySelector('.menu');
            menuBtn.addEventListener('click', function () {
                menu.classList.toggle('active');
            })
            let exitId = document.querySelector('#exit');
            exitId.addEventListener('click', exit)

            function add() {
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML = "";
                return AdsBoard.FormPage.draw();
            }

            function ads() {
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML = "";
                return AdsBoard.PageMyAds.draw();
            }

            function ribbon() {
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML = "";
                fetch("uploadForm.php", {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(function (response) {
                            document.querySelector(".header").innerHTML = "";
                            document.querySelector(".content").innerHTML = "";
                            AdsBoard.PageAds.draw();
                            console.log(response)
                            for (let i = 0; i < response.length; i++) {
                                function createMainDiv() {
                                    let content = document.querySelector(".content");
                                    let divElementMains = document.createElement("div");
                                    divElementMains.classList.add("boardAds")
                                    content.append(divElementMains);
                                    let divElementMain = document.createElement("div");
                                    divElementMain.classList.add("imageDescriptionPrice")
                                    divElementMains.append(divElementMain);
                                    let imagesAndPhone = document.createElement("div");
                                    imagesAndPhone.classList.add("imagesAndPhone");
                                    let img = document.createElement("div");
                                    img.classList.add("image");
                                    imagesAndPhone.append(img)
                                    let divElementPhone = document.createElement("div");
                                    divElementPhone.classList.add("phone")
                                    let elementP = document.createElement("p")
                                    elementP.append(document.createTextNode("Показать телефон"));
                                    divElementPhone.append(elementP);
                                    imagesAndPhone.append(divElementPhone);
                                    let descriptionDivAndSalesman = document.createElement("div");
                                    descriptionDivAndSalesman.classList.add("description-salesman");
                                    let descriptionDiv = document.createElement("div");
                                    let descriptionP = document.createElement("p");
                                    descriptionDiv.append(descriptionP)
                                    descriptionP.innerHTML = response[i].description
                                    descriptionDiv.classList.add("description");
                                    descriptionDivAndSalesman.append(descriptionDiv);
                                    let priceDiv = document.createElement("div");
                                    priceDiv.classList.add("price");
                                    priceDiv.innerHTML = response[i].price
                                    descriptionDivAndSalesman.append(priceDiv);
                                    let divSalesman = document.createElement("div");
                                    divSalesman.classList.add("salesman")
                                    divSalesman.append(document.createTextNode("Продавец:"))
                                    let salesmanP = document.createElement("p")
                                    salesmanP.classList.add("surname");
                                    salesmanP.innerHTML = response[i].name;
                                    divSalesman.append(salesmanP);
                                    salesmanP.append(document.createTextNode(""));
                                    descriptionDivAndSalesman.append(divSalesman)
                                    divElementMain.append(imagesAndPhone, priceDiv, descriptionDivAndSalesman)
                                    divElementPhone.addEventListener("click", function () {
                                        document.querySelector(".phone p").innerHTML = "+7 XXX XXX XXXX";
                                        setTimeout(() => document.querySelector(".phone p").innerHTML = "Показать телефон", 5000)
                                    })
                                    return divElementMain;
                                }

                                createMainDiv();
                            }
                        }
                    )
            };

            async function exit() {
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML = "";
                let res = await fetch("logout.php")
                    .then(response => response.text())
                    .then(function (response) {
                        if (response === "OK") {
                            return AdsBoard.PageLogin.draw();
                        } else {
                            console.log(response)
                        }
                    })
            }
        }
    }

    function createMainDiv() {
        let divElement = document.createElement("div");
        divElement.append(document.createTextNode("Объявления.RU"));
        divElement.classList.add("ads");
        divElement.setAttribute("name", "ads");
        return divElement
    };

    function createHeaderRight() {
        let divElement = document.createElement("div");
        divElement.classList.add("header_right");
        divElement.setAttribute("name", "header_right");
        return divElement;
    }

    function createHeaderRight() {
        let divElement = document.createElement("div");
        divElement.classList.add("burger");
        divElement.setAttribute("id", "trigger");
        let spanElement1 = document.createElement("span");
        let spanElement2 = document.createElement("span");
        let spanElement3 = document.createElement("span");
        divElement.append(spanElement1);
        divElement.append(spanElement2);
        divElement.append(spanElement3);
        return divElement;
    }

    function createNav() {
        let divElement = document.createElement("div");
        let navElement = document.createElement("nav");
        divElement.append(navElement);
        let ulElement = document.createElement("ul");
        let liElement = document.createElement("li");
        let aElement = document.createElement("a");
        aElement.append(document.createTextNode("Лента"));
        // aElement.setAttribute("href", "/1");
        aElement.classList.add("ribbon")
        liElement.append(aElement);
        ulElement.append(liElement);

        let liElement2 = document.createElement("li");
        let aElement2 = document.createElement("a");
        aElement2.append(document.createTextNode("Мои объявления"));
        // aElement2.setAttribute("href", "#");
        aElement2.classList.add("MyAds")
        liElement2.append(aElement2);
        ulElement.append(liElement2);


        let liElement3 = document.createElement("li");
        let aElement3 = document.createElement("a");
        aElement3.append(document.createTextNode("Добавить"));
        // aElement3.setAttribute("href", "#");
        aElement3.classList.add("add")
        liElement3.append(aElement3);
        ulElement.append(liElement3);

        let liElement4 = document.createElement("li");
        let aElement4 = document.createElement("a");
        aElement4.append(document.createTextNode("Выход"));
        // aElement4.setAttribute("href", "#");
        aElement4.setAttribute("id", "exit");
        liElement4.append(aElement4);
        ulElement.append(liElement4);

        navElement.append(ulElement);
        navElement.classList.add("menu");
        navElement.setAttribute("name", "menu");
        return navElement;
    }

})(AdsBoard);

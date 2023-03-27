(function (app) {
    app.Header = {
        draw: function () {
            let header      = document.querySelector(".header")
            let createLable = createLableAds();
            header.append(
                createLable,
            );
        }
    }
    app.HeaderNavigationMenu = {
        draw: function () {
            let header      = document.querySelector(".header");
            let headerRight = createHeaderRight();
            let nav         = app.Menu.create();
            header.append(
                nav,
                headerRight
            );
            let addAds = document.querySelector(".add");
            addAds.addEventListener("click", add);

            let ribbonHeader = document.querySelector(".ribbon");
            ribbonHeader.addEventListener("click", ribbon);

            let adsHeader = document.querySelector(".MyAds");
            adsHeader.addEventListener("click", ads);

            let menuBtn = document.querySelector('.burger');
            let menu    = document.querySelector('.menu');
            menuBtn.addEventListener('click', function () {
                menu.classList.toggle('active');
            })

            let exitId = document.querySelector('#exit');
            exitId.addEventListener('click', exit);

            function add() {
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML  = "";
                
                return AdsBoard.FormPage.draw();
            }
           async function ads() {
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML  = "";
                let response = localStorage.getItem('user');

                return AdsBoard.PageMyAds.draw(response);
            }
           function ribbon() {
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML  = "";

                fetch("php/uploadForm.php", {
                    method: 'GET',
                })
                .then(response => response.json())
                .then(function (response) {
                    document.querySelector(".header").innerHTML  = "";
                    document.querySelector(".content").innerHTML = "";
                    AdsBoard.PageAds.draw();
                    for (let i = 0; i < response.length; i++) {
                        createMainDiv(response[i]);
                    }
                })
           };
            async function exit() {
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML  = "";

            await fetch("php/logout.php")
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
    function createMainDiv(responseItem) {
        let createContainer   = container(responseItem);
        let createInputHidden = inputHidden(responseItem);
        let createDivImageDescriptionPrice = divMain();
        let createDivImagesAndPhone = containerImagesAndPhone();
        let createImage = image(responseItem);
        let createPhone = createPhoneDiv();
        let showPhone   = phone();
        let createDescriptionAndSalesman = descriptionAndSalesman(responseItem);
        let createPrice = price(responseItem);
        let createSalesman = salesman(responseItem);

        createContainer.append(createInputHidden, createDivImageDescriptionPrice);
        showPhone.append(document.createTextNode("Показать телефон"));
        createPhone.append(showPhone);
        createDivImagesAndPhone.append(createImage, createPhone);
        createDescriptionAndSalesman.append(createPrice);
        createDescriptionAndSalesman.append(createSalesman);
        createDivImageDescriptionPrice.append(createDivImagesAndPhone, createPrice, createDescriptionAndSalesman);

        return createDivImageDescriptionPrice;
    }
    function salesman(responseItem){
        let divSalesman = document.createElement("div");
        divSalesman.classList.add("salesman");
        divSalesman.append(document.createTextNode("Продавец:"));
        let salesmanP = document.createElement("p")
        salesmanP.classList.add("surname");
        salesmanP.innerHTML = responseItem.name;
        salesmanP.append(document.createTextNode(""));
        divSalesman.append(salesmanP);

        return divSalesman;
    }
    function price(responseItem){
        let priceDiv = document.createElement("div");
        priceDiv.classList.add("price");
        priceDiv.innerHTML = responseItem.price;

        return priceDiv
    }
    function descriptionAndSalesman(responseItem){
        let descriptionDivAndSalesman = document.createElement("div");
        descriptionDivAndSalesman.classList.add("description-salesman");
        let descriptionDiv = document.createElement("div");
        let descriptionP = document.createElement("p");
        descriptionDiv.append(descriptionP);
        descriptionP.innerHTML = responseItem.description;
        descriptionDiv.classList.add("description");
        descriptionDivAndSalesman.append(descriptionDiv);

        return descriptionDivAndSalesman;
    }
    function phone(){
        let paragraph = document.createElement("p");
        paragraph.onclick = function (event) {
            let target = event.target;
            if (target.tagName != 'P') return;
            paragraph.innerHTML = "+7 XXX XXX XXXX";
            setTimeout(() => paragraph.innerHTML = "Показать телефон", 5000)
        }
        return paragraph;
    }
    function createPhoneDiv(){
        let divElementPhone = document.createElement("div");
        divElementPhone.classList.add("phone");

        return divElementPhone
    }
    function image(responseItem){
        let img = document.createElement("div");
        img.classList.add("image");
        let imgPicture = document.createElement("img");
        img.append(imgPicture);
        imgPicture.setAttribute("src",responseItem.filename);
        img.classList.add("imgPicture");

        return img;
    }
    function containerImagesAndPhone(){
        let imagesAndPhone = document.createElement("div");
        imagesAndPhone.classList.add("imagesAndPhone");

        return imagesAndPhone;
    }
    function divMain(){
        let divElementMain = document.createElement("div");
        divElementMain.classList.add("imageDescriptionPrice");

        return divElementMain;
    }
    function inputHidden(responseItem){
        let inputHidden = document.createElement("input");
        inputHidden.setAttribute("type", "hidden");
        inputHidden.setAttribute("dataset-test", responseItem.id);

        return inputHidden;
    }
    function container(responseItem){
        let content = document.querySelector(".content");
        let divElementMains = document.createElement("div");
        divElementMains.classList.add("boardAds");
        content.append(divElementMains);

        return divElementMains;
    }
    function createLableAds() {
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
    };
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
})(AdsBoard);

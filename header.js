(function (app) {
    app.Header = {
        draw: function (user_id) {
            console.log(user_id)
            let header = document.querySelector(".header")
            let createLable = createLableAds();
            header.append(
                createLable,
            );
        }
    }
    app.HeaderNavigationMenu = {
        draw: function (user_id) {
            console.log(user_id)
            let header = document.querySelector(".header");
            let headerRight = createHeaderRight();
            let nav = app.Menu.create();
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

            function add(user_id) {
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML  = "";
                
                return AdsBoard.FormPage.draw(user_id);
            }

           async function ads() {
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML  = "";
               let res = localStorage.getItem('user');
             console.log(res)
                return AdsBoard.PageMyAds.draw(res);
            }

            function ribbon(user_id) {
                console.log(user_id)
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML  = "";

                fetch("uploadForm.php", {
                    method: 'GET',
                })
                .then(response => response.json())
                .then(function (response) {

                    document.querySelector(".header").innerHTML  = "";
                    document.querySelector(".content").innerHTML = "";

                    AdsBoard.PageAds.draw();
                    console.log(response)
                        for (let i = 0; i < response.length; i++) {
                            createMainDiv(response[i]);
                        }
                    }
                )
            };

            async function exit() {
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML  = "";

            await fetch("logout.php")

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
        let content = document.querySelector(".content");
        
        let divElementMains = document.createElement("div");
        divElementMains.classList.add("boardAds");
        content.append(divElementMains);

        let inputHidden = document.createElement("input");
        inputHidden.setAttribute("type", "hidden");
        inputHidden.setAttribute("dataset-test", responseItem.id);
        divElementMains.append(inputHidden);

        let divElementMain = document.createElement("div");
        divElementMain.classList.add("imageDescriptionPrice");
        divElementMains.append(divElementMain);

        let imagesAndPhone = document.createElement("div");
        imagesAndPhone.classList.add("imagesAndPhone");

        let img = document.createElement("div");
        img.classList.add("image");

        let imgPicture = document.createElement("img");
        img.append(imgPicture);
        imgPicture.setAttribute("src",responseItem.filename);
        img.classList.add("imgPicture");
        imagesAndPhone.append(img);

        let divElementPhone = document.createElement("div");
        divElementPhone.classList.add("phone");

        let paragraph = document.createElement("p");
        paragraph.onclick = function (event) {
            let target = event.target;
            if (target.tagName != 'P') return;
            paragraph.innerHTML = "+7 XXX XXX XXXX";
            setTimeout(() => paragraph.innerHTML = "Показать телефон", 5000)
        }
        paragraph.append(document.createTextNode("Показать телефон"));
        divElementPhone.append(paragraph);
        imagesAndPhone.append(divElementPhone);

        let descriptionDivAndSalesman = document.createElement("div");
        descriptionDivAndSalesman.classList.add("description-salesman");

        let descriptionDiv = document.createElement("div");

        let descriptionP = document.createElement("p");
        descriptionDiv.append(descriptionP);
        descriptionP.innerHTML = responseItem.description;
        descriptionDiv.classList.add("description");
        descriptionDivAndSalesman.append(descriptionDiv);

        let priceDiv = document.createElement("div");
        priceDiv.classList.add("price");
        priceDiv.innerHTML = responseItem.price;
        descriptionDivAndSalesman.append(priceDiv);

        let divSalesman = document.createElement("div");
        divSalesman.classList.add("salesman");
        divSalesman.append(document.createTextNode("Продавец:"));

        let salesmanP = document.createElement("p")
        salesmanP.classList.add("surname");
        salesmanP.innerHTML = responseItem.name;
        salesmanP.append(document.createTextNode(""));

        divSalesman.append(salesmanP);

        descriptionDivAndSalesman.append(divSalesman);
        divElementMain.append(imagesAndPhone, priceDiv, descriptionDivAndSalesman);

        return divElementMain;
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
      
})(AdsBoard);

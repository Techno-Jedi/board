(function (app) {
    app.PageAds = {
        draw: function () {
            document.querySelector(".header").innerHTML = "";
            app.Header.draw("");
            app.Header2.draw("");
            //         let divElementMain = createMainDiv();
            //         let divElement = createdivElement();
            //         let priceDiv = createPriceDiv();
            //         let imagesAndPhone = createImagesAndPhone();
            //         let img = createImg();
            //         let divElementPhone = createElementPhone();
            //         let descriptionDivAndSalesman = createDescriptionDivAndSalesman();
            //         let descriptionDiv = createDescriptionDiv();
            //         let divSalesman = createDivSalesman();
            //         divElementMain.append(divElement);
            //         divElement.append(imagesAndPhone, priceDiv, descriptionDivAndSalesman);
            //         imagesAndPhone.append(img, divElementPhone);
            //         descriptionDivAndSalesman.append(descriptionDiv, divSalesman);
            //
            //         divElementPhone.addEventListener("click", function () {
            //             document.querySelector(".phone p").innerHTML = "+7 XXX XXX XXXX";
            //             setTimeout(() => document.querySelector(".phone p").innerHTML = "Показать телефон", 5000)
            //         })
            //     }
            // }
            // fetch("uploadForm.php", {
            //     method: 'GET',
            // })
            //     .then(response => response.json())
            //     .then(function (response) {
            //             document.querySelector(".header").innerHTML = "";
            //             document.querySelector(".content").innerHTML = "";
            //             AdsBoard.PageAds.draw();
            //             console.log(response.id)
            //             for (let i = 0; i < response.length; i++) {
            //                 function createMainDiv() {
            //                     let content = document.querySelector(".content");
            //                     let divElementMains = document.createElement("div");
            //                     divElementMains.classList.add("boardAds")
            //                     content.append(divElementMains);
            //                     let divElementMain = document.createElement("div");
            //                     divElementMain.classList.add("imageDescriptionPrice")
            //                     divElementMains.append(divElementMain);
            //                     let imagesAndPhone = document.createElement("div");
            //                     imagesAndPhone.classList.add("imagesAndPhone");
            //                     let img = document.createElement("div");
            //                     img.classList.add("image");
            //                     imagesAndPhone.append(img)
            //                     let divElementPhone = document.createElement("div");
            //                     divElementPhone.classList.add("phone")
            //                     let elementP = document.createElement("p")
            //                     elementP.append(document.createTextNode("Показать телефон"));
            //                     divElementPhone.append(elementP);
            //                     imagesAndPhone.append(divElementPhone);
            //                     let descriptionDivAndSalesman = document.createElement("div");
            //                     descriptionDivAndSalesman.classList.add("description-salesman");
            //                     let descriptionDiv = document.createElement("div");
            //                     let descriptionP = document.createElement("p");
            //                     descriptionDiv.append(descriptionP)
            //                     descriptionP.innerHTML = response[i].description
            //                     descriptionDiv.classList.add("description");
            //                     descriptionDivAndSalesman.append(descriptionDiv);
            //                     let priceDiv = document.createElement("div");
            //                     priceDiv.classList.add("price");
            //                     priceDiv.innerHTML = response[i].price
            //                     descriptionDivAndSalesman.append(priceDiv);
            //                     let divSalesman = document.createElement("div");
            //                     divSalesman.classList.add("salesman")
            //                     divSalesman.append(document.createTextNode("Продавец:"))
            //                     let salesmanP = document.createElement("p")
            //                     salesmanP.classList.add("surname");
            //                     salesmanP.innerHTML = response[i].name;
            //                     divSalesman.append(salesmanP);
            //                     salesmanP.append(document.createTextNode(""));
            //                     descriptionDivAndSalesman.append(divSalesman)
            //                     divElementMain.append(imagesAndPhone, priceDiv, descriptionDivAndSalesman)
            //                     divElementPhone.addEventListener("click", function () {
            //                         document.querySelector(".phone p").innerHTML = "+7 XXX XXX XXXX";
            //                         setTimeout(() => document.querySelector(".phone p").innerHTML = "Показать телефон", 5000)
            //                     })
            //                     return divElementMain;
            //                 }
            //
            //                 createMainDiv();
            //             }
            //         }
            //     );

            // function createMainDiv() {
            //     let content = document.querySelector(".content");
            //     let divElementMain = document.createElement("div");
            //     divElementMain.classList.add("boardAds")
            //     content.append(divElementMain);
            //     return divElementMain;
            // }
            //
            // function createdivElement() {
            //     let divElement = document.createElement("div");
            //     divElement.classList.add("imageDescriptionPrice")
            //     return divElement;
            // }
            //
            // function createImagesAndPhone() {
            //     let imagesAndPhone = document.createElement("div");
            //     imagesAndPhone.classList.add("imagesAndPhone");
            //     return imagesAndPhone;
            // }
            //
            // function createImg() {
            //     let img = document.createElement("div");
            //     img.classList.add("image");
            //     return img;
            // }
            //
            // function createElementPhone() {
            //     let divElementPhone = document.createElement("div");
            //     divElementPhone.classList.add("phone")
            //     let elementP = document.createElement("p")
            //     elementP.append(document.createTextNode("Показать телефон"));
            //     divElementPhone.append(elementP);
            //     return divElementPhone
            // }
            //
            // function createDescriptionDivAndSalesman() {
            //     let descriptionDivAndSalesman = document.createElement("div");
            //     descriptionDivAndSalesman.classList.add("description-salesman");
            //     return descriptionDivAndSalesman;
            // }
            //
            // function createDescriptionDiv() {
            //     let descriptionDiv = document.createElement("div");
            //     let descriptionP = document.createElement("p");
            //     descriptionDiv.append(descriptionP)
            //     let descriptionTitle = document.createTextNode("Планшет Galaxy Tab.");
            //     descriptionP.append(descriptionTitle)
            //     let descriptionPd = document.createElement("p");
            //     descriptionDiv.append(descriptionPd)
            //     let description = document.createTextNode("Немного потрепанный, цвет черный.");
            //     descriptionPd.append(description)
            //     descriptionDiv.classList.add("description")
            //     return descriptionDiv;
            // }
            //
            // function createPriceDiv() {
            //     let priceDiv = document.createElement("div");
            //     priceDiv.append(document.createTextNode("3000 P"))
            //     priceDiv.classList.add("price")
            //     return priceDiv;
            // }
            //
            // function createDivSalesman() {
            //     let divSalesman = document.createElement("div");
            //     divSalesman.classList.add("salesman")
            //     divSalesman.append(document.createTextNode("Продавец:"))
            //     let salesmanP = document.createElement("p")
            //     salesmanP.classList.add("surname")
            //     divSalesman.append(salesmanP);
            //     salesmanP.append(document.createTextNode("Иванов И.И"));
            //     return divSalesman;
        }
    }
})(AdsBoard);
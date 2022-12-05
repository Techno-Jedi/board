(function (app) {
    app.PageAds = {
        draw:function (){
            let content = document.querySelector(".content");
            let divElementMain = document.createElement("div");
            divElementMain.classList.add("boardAds")
            content.append(divElementMain);

            let divElement = document.createElement("div");
            divElement.classList.add("imageDescriptionPrice")
            divElementMain.append(divElement);

            let img = document.createElement("div");
            img.classList.add("image")
            divElement.append(img);

            let divElementData = document.createElement("div");

            divElementData.classList.add("data")
            divElementMain.append(divElementData);

            let divElementPhone = document.createElement("div");
            divElementData.append(divElementPhone);
            divElementPhone.classList.add("phone")
            let elementP = document.createElement("p")
            divElementPhone.append(elementP);
            let numberPhone = document.createTextNode("Показать телефон");
            elementP.append(numberPhone)

            let descriptionDiv = document.createElement("div");
            let description = document.createTextNode("Планшет Galaxy Tab. Немного потрепанный, цвет черный.");
            descriptionDiv.append(description)
            descriptionDiv.classList.add("description")
            divElement.append(descriptionDiv);

            let priceDiv = document.createElement("div");
            let price = document.createTextNode("3000 P");
            priceDiv.append(price)
            priceDiv.classList.add("price")
            divElement.append(priceDiv);

            let divSalesman = document.createElement("div");
            let salesman = document.createTextNode("Продавец:");
            divSalesman.append(salesman)
            divSalesman.classList.add("salesman")
            divElementData.append(divSalesman);

            let salesmanP = document.createElement("p")
            salesmanP.classList.add("surname")
            divSalesman.append(salesmanP);
            let salesmanText = document.createTextNode("Гошан ГГ");
            salesmanP.append(salesmanText)
    }
}})(AdsBoard);
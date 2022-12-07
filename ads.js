(function (app) {
    app.PageAds = {
        draw:function (){

            let divElementMain = createMainDiv();

            let divElement = document.createElement("div");
            divElement.classList.add("imageDescriptionPrice")
            divElementMain.append(divElement);

            let imagesAndPhone = document.createElement("div");
            imagesAndPhone.classList.add("imagesAndPhone");
            divElement.append(imagesAndPhone);

            let img = document.createElement("div");
            img.classList.add("image")
            imagesAndPhone.append(img);


            let divElementPhone = document.createElement("div");
            imagesAndPhone.append(divElementPhone);
            divElementPhone.classList.add("phone")
            let elementP = document.createElement("p")
            divElementPhone.append(elementP);
            let numberPhone = document.createTextNode("Показать телефон");
            elementP.append(numberPhone)

            let descriptionDivAndSalesman = document.createElement("div");
            descriptionDivAndSalesman.classList.add("description-salesman");
            divElement.append(descriptionDivAndSalesman);

            let descriptionDiv = document.createElement("div");
            let descriptionP = document.createElement("p");
            descriptionDiv.append(descriptionP)
            let descriptionTitle =  document.createTextNode("Планшет Galaxy Tab.");
            descriptionP.append(descriptionTitle)

            let descriptionPd = document.createElement("p");
            descriptionDiv.append(descriptionPd)
            let description = document.createTextNode("Немного потрепанный, цвет черный.");
            descriptionPd.append(description)
            descriptionDiv.classList.add("description")
            descriptionDivAndSalesman.append(descriptionDiv);

            let priceDiv = document.createElement("div");
            let price = document.createTextNode("3000 P");
            priceDiv.append(price)
            priceDiv.classList.add("price")
            divElement.append(priceDiv);

            let divSalesman = document.createElement("div");
            divSalesman.classList.add("salesman")
            descriptionDivAndSalesman.append(divSalesman);

            let salesmanP = document.createElement("p")
            salesmanP.classList.add("surname")
            divSalesman.append(salesmanP);
            let salesmanText = document.createTextNode("Продавец:Гошан ГГ");
            salesmanP.append(salesmanText)
    }
}
        function createMainDiv() {
            let content = document.querySelector(".content");
            let divElementMain = document.createElement("div");
            divElementMain.classList.add("boardAds")
            content.append(divElementMain);
            return divElementMain;
        }

})(AdsBoard);
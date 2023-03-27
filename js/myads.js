(function (app) {
    app.PageMyAds = {
        draw: function (id) {
            app.Header.draw("");
            app.HeaderNavigationMenu.draw("");
            if (id) {
                fetch(`php/user.php?id=${id}` , {
                    method: 'GET',
                })
                .then(response => response.json())
                .then(function (response) {
                    document.querySelector(".header").innerHTML  = "";
                    document.querySelector(".content").innerHTML = "";
                    app.Header.draw("");
                    app.HeaderNavigationMenu.draw("");
                    AdsBoard.PageAds.draw(id);
                    let user_id = response.map((e)=>e.user_id)
                    const result = user_id.filter(word => word === id);
                    for (let i = 0; i < result.length; i++) {
                        createMainDiv(result, response[i]);
                    }
                });
            }
        }
    }
    function createMainDiv(responseId, responseItem) {
        let createContainer   = container(responseItem);
        let createInputHidden = inputHidden(responseItem);
        let createDivImageDescriptionPrice = divMain();
        let createDivImagesAndPhone = containerImagesAndPhone();
        let createImage = image(responseItem);
        let createDescriptionAndSalesman = descriptionAndSalesman(responseItem);
        let changePriceAndChange = document.createElement("div");
        let createDivChange = divChange(responseItem);
        let createButtonDelete = deleteButton(responseItem);
        let createPrice = price(responseItem);
        createContainer.append(createInputHidden);
        createContainer.append(createDivImageDescriptionPrice);
        createDivImagesAndPhone.append(createImage);
        changePriceAndChange.classList.add("priceAndChange");
        createDivImageDescriptionPrice.append(changePriceAndChange);
        changePriceAndChange.append(createDivChange);
        createDivChange.append(createButtonDelete);
        changePriceAndChange.append(createPrice);

        createDivImageDescriptionPrice.append(
            createDivImagesAndPhone,
            createDescriptionAndSalesman,
            changePriceAndChange
        );
        return createDivImageDescriptionPrice;
    }
    function price(responseItem){
        let priceDiv = document.createElement("div");
        priceDiv.append(document.createTextNode(""));
        priceDiv.classList.add("price");
        priceDiv.innerHTML = responseItem.price

        return priceDiv
    }
    function deleteButton(responseItem){
        let divElement = document.createElement("div");
        divElement.classList.add("delete");
        let paragraphElement = document.createElement("p");
        paragraphElement.append(document.createTextNode("Удалить"));
        paragraphElement.setAttribute("href", `upload.php?id=${responseItem.id}`);
        paragraphElement.setAttribute("dataset-test", responseItem.id);
        paragraphElement.onclick = function (event) {

            let target = event.target;
            if (target.tagName != 'P') return;
            document.querySelector(".header").innerHTML  = "";
            document.querySelector(".content").innerHTML = "";
            let id = responseItem;
            function removePost() {
                fetch("php/uploadForm.php", {
                    method: 'DELETE',
                    body: JSON.stringify(id)
                })
                    .then(response => response.json())
                    .then(function (response) {
                        document.querySelector(".header").innerHTML  = "";
                        document.querySelector(".content").innerHTML = "";
                        AdsBoard.FormPage.draw();
                    }).catch(function (error) {
                    console.log(error);
                });
            }
            removePost();
        };
        divElement.append(paragraphElement);

        return divElement;
    }
    function divChange(responseItem){
        let change = document.createElement("div");
        change.classList.add("DeleteAndChange");

        let divElementPhone = document.createElement("div");
        divElementPhone.classList.add("change");

        let elementP = document.createElement("p");
        elementP.append(document.createTextNode("Изменить"));
        elementP.setAttribute("href", `uploadForm.php?id=${responseItem.id}`);
        elementP.setAttribute("dataset-test", responseItem.id)
        elementP.onclick = function (event) {
            let target = event.target;
            if (target.tagName != 'P') return;
            document.querySelector(".header").innerHTML  = "";
            document.querySelector(".content").innerHTML = "";
            AdsBoard.MyFormPage.draw(responseItem);
        };
        divElementPhone.append(elementP);
        change.append(divElementPhone);

        return change
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
    function container(responseItem){
        let content = document.querySelector(".content");
        let divElementMains = document.createElement("div");
        divElementMains.classList.add("boardAds");
        content.append(divElementMains);

        return divElementMains;
    }
    function inputHidden(responseItem){
        let inputHidden = document.createElement("input");
        inputHidden.setAttribute("type", "hidden");
        inputHidden.setAttribute("dataset-test", responseItem.id);

        return inputHidden;
    }
})(AdsBoard);
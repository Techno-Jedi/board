(function (app) {
    app.PageMyAds = {
        draw: function (res) {
            app.Header.draw("");
            app.HeaderNavigationMenu.draw("");
            console.log(res)
            if (res) {
                fetch(`uploadForm.php?id=${res}` , {
                    method: 'GET',
                })
                .then(response => response.json())
                .then(function (response) {
                    document.querySelector(".header").innerHTML = "";
                    document.querySelector(".content").innerHTML = "";
                    app.Header.draw("");
                    app.HeaderNavigationMenu.draw("");
                    AdsBoard.PageAds.draw(res);
                    console.log(response)
                    for (let i = 0; i < response.length; i++) {
                        createMainDiv(response[i]);
                    }
                });
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
        imgPicture.classList.add("imgPicture");
        img.append(imgPicture);
        imgPicture.setAttribute("src", responseItem.filename);
        imagesAndPhone.append(img);

        let descriptionDivAndSalesman = document.createElement("div");
        descriptionDivAndSalesman.classList.add("description-salesman");

        let descriptionDiv = document.createElement("div");
        let descriptionP = document.createElement("p");
        descriptionDiv.append(descriptionP);
        descriptionP.innerHTML = responseItem.description;
        descriptionDiv.classList.add("description");
        descriptionDivAndSalesman.append(descriptionDiv);

        let changePriceAndChange = document.createElement("div");
        changePriceAndChange.classList.add("priceAndChange");
        divElementMain.append(changePriceAndChange);

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
            document.querySelector(".header").innerHTML = "";
            document.querySelector(".content").innerHTML = "";
            console.log("this response", responseItem);
            AdsBoard.MyFormPage.draw(responseItem);

        };
        divElementPhone.append(elementP);
        change.append(divElementPhone);
        changePriceAndChange.append(change);

        let divElement = document.createElement("div");
        divElement.classList.add("delete");

        let paragraphElement = document.createElement("p");
        paragraphElement.append(document.createTextNode("Удалить"));
        paragraphElement.setAttribute("href", `upload.php?id=${responseItem.id}`);
        paragraphElement.setAttribute("dataset-test", responseItem.id);
        paragraphElement.onclick = function (event) {

            let target = event.target;
            if (target.tagName != 'P') return;
            document.querySelector(".header").innerHTML = "";
            document.querySelector(".content").innerHTML = "";
            console.log("this response", responseItem);

            let id = responseItem;
            console.log("this response", JSON.stringify(id));
            function removePost() {
                fetch("uploadForm.php", {
                    method: 'DELETE',
                    body: JSON.stringify(id)
                })
                    .then(response => response.json())
                    .then(function (response) {
                        document.querySelector(".header").innerHTML = "";
                        document.querySelector(".content").innerHTML = "";
                        AdsBoard.FormPage.draw();
                    }).catch(function (error) {
                    console.log(error);
                });
            }
            removePost();
        };
        divElement.append(paragraphElement);
        change.append(divElement);

        let priceDiv = document.createElement("div");
        priceDiv.append(document.createTextNode(""));
        priceDiv.classList.add("price");
        priceDiv.innerHTML = responseItem.price
        changePriceAndChange.append(priceDiv);
        divElementMain.append(imagesAndPhone, descriptionDivAndSalesman, changePriceAndChange);

        return divElementMain;
    }
})(AdsBoard);
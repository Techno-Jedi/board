(function (app) {
    app.PageMyAds = {
        draw: function () {
            app.Header.draw("");
            app.Header2.draw("");
            let divElementMain = createMainDiv();
            let divElement = createdivElement();
            let priceDiv = createPriceDiv();
            let imagesAndPhone = createImagesAndPhone();
            let img = createImg();
            let divChange = createChange();
            let deleteAndChange = createDeleteAndChange();
            let divElementСhange = createElementСhange();
            let divElementDelete = createElementDelete();
            let descriptionDivAndSalesman = createDescriptionDivAndSalesman();
            let descriptionDiv = createDescriptionDiv();
            divElementMain.append(divElement);
            divElement.append(imagesAndPhone, descriptionDivAndSalesman, divChange);
            divChange.append(deleteAndChange, priceDiv)
            deleteAndChange.append(divElementСhange, divElementDelete,)
            imagesAndPhone.append(img);
            descriptionDivAndSalesman.append(descriptionDiv);

            let changeForm = document.querySelector(".change");
            let deleteForm = document.querySelector(".delete");
            changeForm.addEventListener("click", change);
            deleteForm.addEventListener("click", deletes);

            function change() {
                alert("hi");
            }

            async function deletes(id) {
                let response = fetch(`uploadForm.php/${id}`, {
                    method: 'DELETE'
                });
                const data = await response.json();
                if (data.status === true) {
                    await AdsBoard.PageAds.draw();
                }
            }

        }
    }

    function createMainDiv() {
        let content = document.querySelector(".content");
        let divElementMain = document.createElement("div");
        divElementMain.classList.add("boardAds")
        content.append(divElementMain);
        return divElementMain;
    }

    function createdivElement() {
        let divElement = document.createElement("div");
        divElement.classList.add("imageDescriptionPrice")
        return divElement;
    }

    function createImagesAndPhone() {
        let imagesAndPhone = document.createElement("div");
        imagesAndPhone.classList.add("imagesAndPhone");
        return imagesAndPhone;
    }

    function createImg() {
        let img = document.createElement("div");
        img.classList.add("image");
        return img;
    }

    function createChange() {
        let change = document.createElement("div");
        change.classList.add("priceAndChange");
        return change;
    }

    function createDeleteAndChange() {
        let change = document.createElement("div");
        change.classList.add("DeleteAndChange");
        return change;
    }

    function createElementСhange() {
        let divElementPhone = document.createElement("div");
        divElementPhone.classList.add("change")
        let elementP = document.createElement("p")
        elementP.append(document.createTextNode("Изменить"));
        divElementPhone.append(elementP);
        return divElementPhone
    }

    function createElementDelete() {
        let divElementPhone = document.createElement("div");
        divElementPhone.classList.add("delete")
        let elementP = document.createElement("p")
        elementP.append(document.createTextNode("Удалить"));
        divElementPhone.append(elementP);
        return divElementPhone
    }

    function createDescriptionDivAndSalesman() {
        let descriptionDivAndSalesman = document.createElement("div");
        descriptionDivAndSalesman.classList.add("description-salesman");
        return descriptionDivAndSalesman;
    }

    function createDescriptionDiv() {
        let descriptionDiv = document.createElement("div");
        let descriptionP = document.createElement("p");
        descriptionDiv.append(descriptionP)
        let descriptionTitle = document.createTextNode("Планшет Galaxy Tab.");
        descriptionP.append(descriptionTitle)
        let descriptionPd = document.createElement("p");
        descriptionDiv.append(descriptionPd)
        let description = document.createTextNode("Немного потрепанный, цвет черный.");
        descriptionPd.append(description)
        descriptionDiv.classList.add("description")
        return descriptionDiv;
    }

    function createPriceDiv() {
        let priceDiv = document.createElement("div");
        priceDiv.append(document.createTextNode("3000 P"))
        priceDiv.classList.add("price")
        return priceDiv;
    }

})(AdsBoard);
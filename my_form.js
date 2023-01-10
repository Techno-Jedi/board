(function (app) {
    app.MyFormPage = {
        draw: function (response) {
            console.log(response.id)
            let id = response.id;
            let price = response.price;
            let description = response.description;
            let name = response.name;
            let htmlDivElementForm = createMainDiv();
            let inputHidden =createInputNameHidden(id);
            let inputElement = createInputName(name);
            let textareaElement = createTextarea(description);
            let inputPrice = createInputPrice(price);
            let imagesAndPhone = createImagesAndPhone();
            let img = createImg();
            let divElementPhone = createElementPhone();
            let loading = createLoading();
            let loadingAndSave = createLoadingAndSave();
            app.Header.draw("");
            app.Header2.draw("");
            htmlDivElementForm.append(
                inputHidden,
                inputElement,
                textareaElement,
                inputPrice,
                img,
                loadingAndSave
            );
            imagesAndPhone.append(img, divElementPhone);
            loadingAndSave.append(imagesAndPhone, loading);

            let buttunLoading = document.querySelector(".loading");
            buttunLoading.addEventListener("click", function () {
                return alert("hi");
            });
            let buttunSave = document.querySelector(".phone");
            buttunSave.addEventListener("click", goToUploadForm);
        }
    }

    function createMainDiv() {
        let content = document.querySelector(".content");
        let divElementMain = document.createElement("div");
        divElementMain.classList.add("adsForm")
        content.append(divElementMain);
        return divElementMain;
    }
    function createInputNameHidden(id) {
        let htmlInputElement = document.createElement("input");
        htmlInputElement.setAttribute("name", "id");
        htmlInputElement.setAttribute("type", "hidden");
        htmlInputElement.setAttribute("value", id);
        // htmlInputElement.value += y;
        return htmlInputElement;
    }

    function createInputName(y) {
        let divElement = document.createElement("div");
        let paragraphElement = document.createElement("p");
        divElement.append(paragraphElement);
        let text = document.createTextNode("Название:");
        paragraphElement.append(text);
        divElement.classList.add("input_form_div");
        let htmlInputElement = document.createElement("input");
        divElement.append(htmlInputElement)
        htmlInputElement.classList.add("input_form");
        htmlInputElement.setAttribute("name", "title");
        htmlInputElement.setAttribute("type", "text");
        htmlInputElement.value += y;
        return divElement;
    }

    function createTextarea(x) {
        let divElement = document.createElement("div");
        let paragraphElement = document.createElement("p");
        divElement.append(paragraphElement);
        let text = document.createTextNode("Описание:");
        paragraphElement.append(text)
        divElement.classList.add("textarea_div");
        let htmlTextAreaElement = document.createElement("textarea");
        divElement.append(htmlTextAreaElement)
        htmlTextAreaElement.classList.add("textarea");
        htmlTextAreaElement.setAttribute("name", "textarea");
        htmlTextAreaElement.setAttribute("type", "text");
        htmlTextAreaElement.innerHTML = x;
        return divElement;
    }

    function createInputPrice(price) {
        let divElement = document.createElement("div");
        let paragraphElement = document.createElement("p");
        divElement.append(paragraphElement);
        let text = document.createTextNode("Цена:");
        paragraphElement.append(text);
        divElement.classList.add("input_price_div");
        let htmlInputElement = document.createElement("input");
        htmlInputElement.classList.add("input_price");
        htmlInputElement.setAttribute("name", "price");
        htmlInputElement.setAttribute("name", "price");
        htmlInputElement.setAttribute("value", price);
        divElement.append(htmlInputElement)
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

    function createElementPhone() {
        let divElementPhone = document.createElement("div");
        divElementPhone.classList.add("phone")
        let elementP = document.createElement("p")
        elementP.append(document.createTextNode("Сохранить"));
        divElementPhone.append(elementP);
        return divElementPhone
    }

    function createLoading() {
        let divElementPhone = document.createElement("div");
        divElementPhone.classList.add("loading")
        let elementP = document.createElement("p")
        elementP.append(document.createTextNode("Загрузка"));
        divElementPhone.append(elementP);
        return divElementPhone
    }

    function createLoadingAndSave() {
        let divElement = document.createElement("div");
        divElement.classList.add("loadingAndSave");
        return divElement;
    }

    function goToUploadForm(event) {
        event.preventDefault();
        let formData = new FormData();
        let name = document.querySelector(".input_form").value
        let description = document.querySelector(".textarea").value
        let price = document.querySelector(".input_price").value
        if (name !== "" && description !== "" && price !== "") {
            formData.append('title', name);
            formData.append('textarea', description);
            formData.append('price', price);
            console.log(formData)
            fetch("uploadForm.php", {
                method: 'PUT',
                body: formData,
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
                                return divElementMain;
                            }
                            createMainDiv();
                        }
                    }
                )
        } else {
            alert("Не все поля заполнены")
            document.querySelector(".header").innerHTML = "";
            document.querySelector(".content").innerHTML = "";
            return AdsBoard.FormPage.draw();
        }
    }

})(AdsBoard)
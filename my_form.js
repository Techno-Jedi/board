(function (app) {
    app.MyFormPage = {
        draw: function (response) {
            console.log(response)
            let id = response.id;
            let price = response.price;
            let description = response.description;
            let filename = response.filename;
            let name = response.name;
            let htmlDivElementForm = createMainDiv();
            let inputHidden =createInputNameHidden(id);
            let inputElement = createInputName(name);
            let textareaElement = createTextarea(description);
            let inputPrice = createInputPrice(price);
            let imagesAndPhone = createImagesAndPhone();
            let img = createImg(filename);
            let divElementPhone = createElementPhone();
            let loading = createLoading();
            let loadingAndSave = createLoadingAndSave();
            app.Header.draw("");
            app.HeaderNavigationMenu.draw("");
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
            // buttunLoading.addEventListener("click", function () {
            //     return alert("hi");
            // });
            console.log(response.id)
           let z =  response.id
            let buttunSave = document.querySelector(".phone");
            buttunSave.addEventListener("click", goToUploadForm);
        }
    }

    function createMainDiv() {
        let content = document.querySelector(".content");
        let divElementMain = document.createElement("form");
        divElementMain.classList.add("adsForm")
        content.append(divElementMain);
        return divElementMain;
    }
    function createInputNameHidden(id) {
        let htmlInputElement = document.createElement("input");
        htmlInputElement.setAttribute("name", "id");
        htmlInputElement.setAttribute("type", "hidden");
        htmlInputElement.id = "id"
        // htmlInputElement.setAttribute("value", id);
        htmlInputElement.classList.add(".id_hidden")
        htmlInputElement.value += id;
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
        // htmlInputElement.setAttribute("value", price);
        htmlInputElement.value += price;
        divElement.append(htmlInputElement)

        return divElement;
    }

    function createImagesAndPhone() {
        let imagesAndPhone = document.createElement("div");
        imagesAndPhone.classList.add("imagesAndPhone");

        return imagesAndPhone;
    }

    function createImg(filename) {
        let img = document.createElement("div");
        img.classList.add("image");

        let imgPicture = document.createElement("img");
        img.append(imgPicture);
        imgPicture.setAttribute("src", filename);
        img.classList.add("imgPicture");

        return img;
    }

    function createElementPhone() {
        let divElementPhone = document.createElement("div");
        divElementPhone.classList.add("phone");

        let elementP = document.createElement("p");
        elementP.append(document.createTextNode("Сохранить"));
        divElementPhone.append(elementP);

        return divElementPhone;
    }

    function createLoading() {
        let divElementPhone = document.createElement("div");
        divElementPhone.classList.add("loading");

        let elementP = document.createElement("label");
        elementP.append(document.createTextNode("Загрузка"));
        divElementPhone.append(elementP);
        elementP.setAttribute("for", "file");

        let input = document.createElement("input");
        divElementPhone.append(input);
        input.setAttribute("type", "file");
        input.id = "file";
        input.classList.add("file_img");

        return divElementPhone
    }

    function createLoadingAndSave() {
        let divElement = document.createElement("div");
        divElement.classList.add("loadingAndSave");
        return divElement;
    }
    // function loadingPicture(event){
    //     event.preventDefault();
    //     let formData = new FormData();
    //     formData.append('image', document.querySelector().files[0]);
    //     fetch("put.php", {
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then(response => response.json())
    //         .then(response => function (){
    //             console.log(response)
    //         })
    // }

    function goToUploadForm(event) {
        event.preventDefault();
        let formData = new FormData();
        let id = document.querySelector("#id").value;
        let name = document.querySelector(".input_form").value
        let description = document.querySelector(".textarea").value
        let price = document.querySelector(".input_price").value
        formData.append('image', document.querySelector("#file").files[0]);
        if (name !== "" && description !== "" && price !== "") {
            formData.append('id', id);
            formData.append('title', name);
            formData.append('textarea', description);
            formData.append('price', price);
            fetch("put.php", {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(function (response) {
                    console.log("hyhyh")
                    document.querySelector(".header").innerHTML = "";
                    document.querySelector(".content").innerHTML = "";
                    alert("Данные обновлены");
                    AdsBoard.FormPage.draw();

                    console.log("PageAds",response)

                        // for (let i = 0; i < response.length; i++) {
                        //     // function createMainDiv() {
                        //     //     let content = document.querySelector(".content");
                        //     //     let divElementMains = document.createElement("div");
                        //     //     divElementMains.classList.add("boardAds")
                        //     //     content.append(divElementMains);
                        //     //     let divElementMain = document.createElement("div");
                        //     //     divElementMain.classList.add("imageDescriptionPrice")
                        //     //     divElementMains.append(divElementMain);
                        //     //     let imagesAndPhone = document.createElement("div");
                        //     //     imagesAndPhone.classList.add("imagesAndPhone");
                        //     //     let img = document.createElement("div");
                        //     //     img.classList.add("image");
                        //     //     let imgPicture = document.createElement("img");
                        //     //     imgPicture.classList.add("imgPicture");
                        //     //     img.append(imgPicture)
                        //     //     imgPicture.setAttribute("src", response[i].filename)
                        //     //     imagesAndPhone.append(img)
                        //     //     let divElementPhone = document.createElement("div");
                        //     //     divElementPhone.classList.add("phone")
                        //     //     let elementP = document.createElement("p")
                        //     //     elementP.append(document.createTextNode("Показать телефон"));
                        //     //     divElementPhone.append(elementP);
                        //     //     imagesAndPhone.append(divElementPhone);
                        //     //     let descriptionDivAndSalesman = document.createElement("div");
                        //     //     descriptionDivAndSalesman.classList.add("description-salesman");
                        //     //     let descriptionDiv = document.createElement("div");
                        //     //     let descriptionP = document.createElement("p");
                        //     //     descriptionDiv.append(descriptionP)
                        //     //     descriptionP.innerHTML = response[i].description
                        //     //     descriptionDiv.classList.add("description");
                        //     //     descriptionDivAndSalesman.append(descriptionDiv);
                        //     //     let priceDiv = document.createElement("div");
                        //     //     priceDiv.classList.add("price");
                        //     //     priceDiv.innerHTML = response[i].price
                        //     //     descriptionDivAndSalesman.append(priceDiv);
                        //     //     let divSalesman = document.createElement("div");
                        //     //     divSalesman.classList.add("salesman")
                        //     //     divSalesman.append(document.createTextNode("Продавец:"))
                        //     //     let salesmanP = document.createElement("p")
                        //     //     salesmanP.classList.add("surname");
                        //     //     salesmanP.innerHTML = response[i].name;
                        //     //     divSalesman.append(salesmanP);
                        //     //     salesmanP.append(document.createTextNode(""));
                        //     //     descriptionDivAndSalesman.append(divSalesman)
                        //     //     divElementMain.append(imagesAndPhone, priceDiv, descriptionDivAndSalesman)
                        //     //     return divElementMain;
                        //     // }
                        //     // createMainDiv();
                        // }
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
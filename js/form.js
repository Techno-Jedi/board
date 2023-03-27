(function (app) {
    app.FormPage = {
        draw: function (id) {
            let pageForm = createMainDivForm();
            let name     = inputName();
            let textarea = inputTextarea();
            let price    = inputPrice();
            let inputHidden = createInputNameHidden(id);
            let createDivImagesAndSave = createImagesAndSave();
            let createDivImage    = createImg();
            let createButtonPhone = createElementPhone();
            let buttonLoading     = createLoading();
            let createDivLoadingAndSave = createLoadingAndSave();
            app.Header.draw("");
            app.HeaderNavigationMenu.draw("");
            pageForm.append(
                inputHidden,
                name,
                textarea,
                price,
                createDivImage,
                createDivLoadingAndSave
            );
            createDivImagesAndSave.append(createDivImage, createButtonPhone);
            createDivLoadingAndSave.append(createDivImagesAndSave, buttonLoading);

            let loading = document.querySelector('.loading');
            loading.addEventListener("change", previewFile);

            function previewFile() {
                let preview = document.querySelector('.imgPicture');
                let file    = document.querySelector('input[type=file]').files[0];
                preview.setAttribute("src","../files/" + file.name);
            }
            let buttunSave = document.querySelector(".phone");
            buttunSave.addEventListener("click", goToUploadForm);
        }
    }
    function createMainDivForm() {
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
        htmlInputElement.id = "id";
        htmlInputElement.classList.add("id_hidden");
        htmlInputElement.value += id;

        return htmlInputElement;
    }
    function inputName() {
        let divElement = document.createElement("div");
        let paragraph  = document.createElement("p");

        divElement.append(paragraph);

        let text = document.createTextNode("Название:");
        paragraph.append(text);
        divElement.classList.add("input_form_div");

        let input = document.createElement("input");
        divElement.append(input)
        input.classList.add("input_form");
        input.setAttribute("name", "title");
        input.setAttribute("type", "text");

        return divElement;
    }
    function inputTextarea() {
        let div = document.createElement("div");
        let paragraph = document.createElement("p");
        div.append(paragraph);

        let text = document.createTextNode("Описание:");
        paragraph.append(text)
        div.classList.add("textarea_div");

        let textarea = document.createElement("textarea");
        div.append(textarea)
        textarea.classList.add("textarea");
        textarea.setAttribute("name", "textarea");
        textarea.setAttribute("type", "text");

        return div;
    }
    function inputPrice() {
        let div = document.createElement("div");
        let paragraph = document.createElement("p");
        div.append(paragraph);

        let text = document.createTextNode("Цена:");
        paragraph.append(text);
        div.classList.add("input_price_div");

        let input = document.createElement("input");
        input.classList.add("input_price");
        input.setAttribute("name", "price");
        input.setAttribute("type", "number");
        div.append(input);

        return div;
    }
    function createImagesAndSave() {
        let imagesAndPhone = document.createElement("div");
        imagesAndPhone.classList.add("imagesAndPhone");

        return imagesAndPhone;
    }
    function createLoading() {
        let div = document.createElement("div");
        div.classList.add("loading");

        let paragraph = document.createElement("label");
        paragraph.append(document.createTextNode("Загрузка"));
        div.append(paragraph);
        paragraph.setAttribute("for", "file");

        let input = document.createElement("input");
        div.append(input);
        input.setAttribute("type", "file");
        input.id = "file";
        input.classList.add("file_img");

        return div;
    }
    function createImg() {
        let img = document.createElement("div");
        img.classList.add("image");

        let imgPicture = document.createElement("img");
        img.append(imgPicture);
        imgPicture.classList.add("imgPicture");
  
        return img;
    }
    function createElementPhone() {
        let div = document.createElement("div");
        div.classList.add("phone")

        let paragraph = document.createElement("p")
        paragraph.append(document.createTextNode("Сохранить"));
        div.append(paragraph);

        return div;
    }
    function createLoadingAndSave() {
        let div = document.createElement("div");
        div.classList.add("loadingAndSave");

        return div;
    }
    function goToUploadForm(event) {
        event.preventDefault();
        let formData = new FormData();
        let name     = document.querySelector(".input_form").value
        let description = document.querySelector(".textarea").value
        let price = document.querySelector(".input_price").value
        let image = formData.append('image', document.querySelector("#file").files[0]);
        if (name !== "" && description !== "" && price !== ""  && image !== null) {
            formData.append('title', name);
            formData.append('textarea', description);
            formData.append('price', price);
            fetch("php/uploadForm.php", {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(function (response){
                    document.querySelector(".header").innerHTML = "";
                    document.querySelector(".content").innerHTML = "";
                    alert("Объявление создано")
                    AdsBoard.PageAds.draw();
                    for (let i = 0; i < response.length; i++) {
                        createMainDiv(response[i]);
                    }
                })
        } else {
            alert("Не все поля заполнены");
            document.querySelector(".header").innerHTML  = "";
            document.querySelector(".content").innerHTML = "";
            return AdsBoard.FormPage.draw();
        }
    }
    function createMainDiv(responseItem) {
        let createСontainer = contentContainer();
        let createImagesAndPhone = divImagesAndPhone(responseItem);
        let createImageDiv       = imgDiv(responseItem);
        let createPhoneButton    = createButtonPhone();
        let createDescriptionAndSalesman = descriptionDivAndSalesman(responseItem);
        let createDivPrice    = divPrivce(responseItem);
        let createSalesman    = createDivSalesman(responseItem);

        createImagesAndPhone.append(createImageDiv,createPhoneButton);
        createDescriptionAndSalesman.append(createDivPrice);
        createDescriptionAndSalesman.append(createSalesman)
        createСontainer.append(createImagesAndPhone, createDivPrice, createDescriptionAndSalesman);

        return createСontainer;
    }
    function createButtonPhone(){
        let divElementPhone = document.createElement("div");
        divElementPhone.classList.add("phone");

        let elementP = document.createElement("p");
        elementP.append(document.createTextNode("Показать телефон"));
        divElementPhone.append(elementP);

        return divElementPhone;
    }
    function contentContainer(){
        let content = document.querySelector(".content");
        let divElementMains = document.createElement("div");
        divElementMains.classList.add("boardAds");
        content.append(divElementMains);

        let divElementMain = document.createElement("div");
        divElementMain.classList.add("imageDescriptionPrice");
        divElementMains.append(divElementMain);

        return divElementMain
    }

    function createDivSalesman(responseItem){
        let divSalesman = document.createElement("div");
        divSalesman.classList.add("salesman");
        divSalesman.append(document.createTextNode("Продавец:"));

        let salesmanP = document.createElement("p")
        salesmanP.classList.add("surname");
        salesmanP.innerHTML = responseItem.name;
        divSalesman.append(salesmanP);
        salesmanP.append(document.createTextNode(""));

        return divSalesman;
    }
    function divImagesAndPhone(responseItem){
        let imagesAndPhone = document.createElement("div");
        imagesAndPhone.classList.add("imagesAndPhone");

        return imagesAndPhone;
    }
    function imgDiv(responseItem){
        let img = document.createElement("div");
        img.classList.add("image");

        let imgPicture = document.createElement("img");
        imgPicture.classList.add("imgPicture");
        img.append(imgPicture);
        imgPicture.setAttribute("src", responseItem.filename);
        return img;
    }
    function descriptionDivAndSalesman(responseItem){
        let divElement = document.createElement("div");
        divElement.classList.add("description-salesman");

        let descriptionDiv = document.createElement("div");
        let descriptionP = document.createElement("p");
        descriptionDiv.append(descriptionP);
        descriptionP.innerHTML = responseItem.description;
        descriptionDiv.classList.add("description");
        divElement.append(descriptionDiv);

        return divElement
    }
    function divPrivce(responseItem){
        let divPrice = document.createElement("div");
        divPrice.classList.add("price");
        divPrice.innerHTML = responseItem.price;

        return divPrice
    }



})(AdsBoard)
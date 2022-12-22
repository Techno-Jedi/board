(function (app) {
    app.FormPage = {
        draw: function () {
            let htmlDivElementForm = createMainDiv();
            let inputElement = createInputName();
            let textareaElement = createTextarea();
            let inputPrice =  createInputPrice();
            let imagesAndPhone = createImagesAndPhone();
            let img = createImg();
            let divElementPhone = createElementPhone();
            let loading = createLoading();
            let loadingAndSave = createLoadingAndSave();
            htmlDivElementForm.append(
                inputElement,
                textareaElement,
                inputPrice,
                img,
                loadingAndSave
            );
            imagesAndPhone.append(img, divElementPhone);
            loadingAndSave.append(imagesAndPhone, loading)

        }
    }
    function createMainDiv() {
        let content = document.querySelector(".content");
        let divElementMain = document.createElement("div");
        divElementMain.classList.add("adsForm")
        content.append(divElementMain);
        return divElementMain;
    }
    function createInputName() {
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
        return divElement;
    }

    function createTextarea() {
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
        return divElement;
    }
    function createInputPrice(){
        let divElement = document.createElement("div");
        let paragraphElement = document.createElement("p");
        divElement.append(paragraphElement);
        let text = document.createTextNode("Цена:");
        paragraphElement.append(text);
        divElement.classList.add("input_price_div");
        let htmlInputElement = document.createElement("input");
        htmlInputElement.classList.add("input_price");
        htmlInputElement.setAttribute("name", "price");
        htmlInputElement.setAttribute("type", "text");
        divElement.append(htmlInputElement)
        return divElement;
    }
    function createImagesAndPhone() {
        let imagesAndPhone = document.createElement("div");
        imagesAndPhone.classList.add("imagesAndPhone");
        return imagesAndPhone;
    }

    function createImg(){
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
    function createLoading(){
        let divElementPhone = document.createElement("div");
        divElementPhone.classList.add("loading")
        let elementP = document.createElement("p")
        elementP.append(document.createTextNode("Загрузка"));
        divElementPhone.append(elementP);
        return divElementPhone
    }
    function createLoadingAndSave(){
        let divElement = document.createElement("div");
        divElement.classList.add("loadingAndSave");
        return divElement;
    }
})(AdsBoard)
(function (app) {
    app.MyFormPage = {
        draw: function (response) {
            console.log(response)
            let id    = response.id;
            let price = response.price;
            let description = response.description;
            let filename    = response.filename;
            let name        = response.name;
            let htmlDivElementForm = createMainDiv();
            let inputHidden     = createInputNameHidden(id);
            let inputElement    = createInputName(name);
            let textareaElement = createTextarea(description);
            let inputPrice      = createInputPrice(price);
            let imagesAndPhone  = createImagesAndPhone();
            let image           = createImg(filename);
            let divElementPhone = createElementPhone();
            let loading         = createLoading();
            let loadingAndSave  = createLoadingAndSave();
            app.Header.draw("");
            app.HeaderNavigationMenu.draw("");
            htmlDivElementForm.append(
                inputHidden,
                inputElement,
                textareaElement,
                inputPrice,
                image,
                loadingAndSave
            );
            imagesAndPhone.append(image, divElementPhone);
            loadingAndSave.append(imagesAndPhone, loading);

            let buttunLoading = document.querySelector(".loading");
            console.log(response.id);
            let z =  response.id;
            let buttunSave = document.querySelector(".phone");
            buttunSave.addEventListener("click", goToUploadForm);
        }
    }

    function createMainDiv() {
        let content = document.querySelector(".content");

        let divElementMain = document.createElement("form");
        divElementMain.classList.add("adsForm");
        content.append(divElementMain);

        return divElementMain;
    }
    function createInputNameHidden(id) {
        let input = document.createElement("input");
        input.setAttribute("name", "id");
        input.setAttribute("type", "hidden");
        input.id = "id";
        input.classList.add("id_hidden");
        input.value += id;

        return input;
    }

    function createInputName(y) {
        let div = document.createElement("div");
        let paragraph = document.createElement("p");
        div.append(paragraph);

        let text = document.createTextNode("Название:");
        paragraph.append(text);
        div.classList.add("input_form_div");

        let input = document.createElement("input");
        div.append(input)
        input.classList.add("input_form");
        input.setAttribute("name", "title");
        input.setAttribute("type", "text");
        input.value += y;

        return div;
    }

    function createTextarea(x) {
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
        textarea.innerHTML = x;

        return div;
    }

    function createInputPrice(price) {
        let div = document.createElement("div");
        let paragraph = document.createElement("p");
        div.append(paragraph);

        let text = document.createTextNode("Цена:");
        paragraph.append(text);
        div.classList.add("input_price_div");

        let input = document.createElement("input");
        input.classList.add("input_price");
        input.setAttribute("name", "price");
        input.value += price;
        div.append(input)

        return div;
    }

    function createImagesAndPhone() {
        let createDivImagesAndPhone = document.createElement("div");
        createDivImagesAndPhone.classList.add("imagesAndPhone");

        return createDivImagesAndPhone;
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
        let div = document.createElement("div");
        div.classList.add("phone");

        let paragraph = document.createElement("p");
        paragraph.append(document.createTextNode("Сохранить"));
        div.append(paragraph);

        return div;
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

        return div
    }

    function createLoadingAndSave() {
        let div = document.createElement("div");
        div.classList.add("loadingAndSave");
        return div;
    }

    function goToUploadForm(event) {
        event.preventDefault();
        let formData = new FormData();
        let id       = document.querySelector("#id").value;
        let name     = document.querySelector(".input_form").value;
        let description = document.querySelector(".textarea").value;
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
                document.querySelector(".header").innerHTML = "";
                document.querySelector(".content").innerHTML = "";
                alert("Данные обновлены");
                AdsBoard.FormPage.draw();
                console.log("PageAds",response)
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
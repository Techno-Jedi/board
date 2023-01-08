(function (app) {
    app.PageMyAds = {
        draw: function (res) {
            app.Header.draw("");
            app.Header2.draw("");
            console.log(res)
            //         let divElementMain = createMainDiv();
            //         let divElement = createdivElement();
            //         let priceDiv = createPriceDiv();
            //         let imagesAndPhone = createImagesAndPhone();
            //         let img = createImg();
            //         let divChange = createChange();
            //         let deleteAndChange = createDeleteAndChange();
            //         let divElementСhange = createElementСhange();
            //         let divElementDelete = createElementDelete();
            //         let descriptionDivAndSalesman = createDescriptionDivAndSalesman();
            //         let descriptionDiv = createDescriptionDiv();
            //         // divElementMain.append(divElement);
            //         // divElement.append(imagesAndPhone, descriptionDivAndSalesman, divChange);
            //         // divChange.append(deleteAndChange, priceDiv)
            //         // deleteAndChange.append(divElementСhange, divElementDelete,)
            //         // imagesAndPhone.append(img);
            //         // descriptionDivAndSalesman.append(descriptionDiv);
            //
            //     }
            // }

            // function createMainDiv() {
            //     let content = document.querySelector(".content");
            //     let divElementMain = document.createElement("div");
            //     divElementMain.classList.add("boardAds")
            //     content.append(divElementMain);
            //     return divElementMain;
            // }
            //
            // function createdivElement() {
            //     let divElement = document.createElement("div");
            //     divElement.classList.add("imageDescriptionPrice")
            //     return divElement;
            // }
            //
            // function createImagesAndPhone() {
            //     let imagesAndPhone = document.createElement("div");
            //     imagesAndPhone.classList.add("imagesAndPhone");
            //     return imagesAndPhone;
            // }
            //
            // function createImg() {
            //     let img = document.createElement("div");
            //     img.classList.add("image");
            //     return img;
            // }
            //
            // function createChange() {
            //     let change = document.createElement("div");
            //     change.classList.add("priceAndChange");
            //     return change;
            // }
            //
            // function createDeleteAndChange() {
            //     let change = document.createElement("div");
            //     change.classList.add("DeleteAndChange");
            //     return change;
            // }
            //
            // function createElementСhange() {
            //     let divElementPhone = document.createElement("div");
            //     divElementPhone.classList.add("change")
            //     let elementP = document.createElement("p")
            //     elementP.append(document.createTextNode("Изменить"));
            //     divElementPhone.append(elementP);
            //     return divElementPhone
            // }
            //
            // function createElementDelete() {
            //     let divElementPhone = document.createElement("div");
            //     divElementPhone.classList.add("delete")
            //     let elementP = document.createElement("p")
            //     elementP.append(document.createTextNode("Удалить"));
            //     divElementPhone.append(elementP);
            //     return divElementPhone
            // }
            //
            // function createDescriptionDivAndSalesman() {
            //     let descriptionDivAndSalesman = document.createElement("div");
            //     descriptionDivAndSalesman.classList.add("description-salesman");
            //     return descriptionDivAndSalesman;
            // }
            //
            // function createDescriptionDiv() {
            //     let descriptionDiv = document.createElement("div");
            //     let descriptionP = document.createElement("p");
            //     descriptionDiv.append(descriptionP)
            //     let descriptionTitle = document.createTextNode("Планшет Galaxy Tab.");
            //     descriptionP.append(descriptionTitle)
            //     let descriptionPd = document.createElement("p");
            //     descriptionDiv.append(descriptionPd)
            //     let description = document.createTextNode("Немного потрепанный, цвет черный.");
            //     descriptionPd.append(description)
            //     descriptionDiv.classList.add("description")
            //     return descriptionDiv;
            // }
            //
            // function createPriceDiv() {
            //     let priceDiv = document.createElement("div");
            //     priceDiv.append(document.createTextNode("3000 P"))
            //     priceDiv.classList.add("price")
            //     return priceDiv;
            // }
            // let z = document.querySelector(".change");

            // z.onclick = function(event) {
            //     let target = event.target; // где был клик?
            //
            //     if (target.tagName != 'P') return; // не на TD? тогда не интересует
            //
            //     alert(target); // подсветить TD
            // };
            // let z = document.querySelector("dataset-test")
            // z.onclick = function(event) {
            //     let target = event.target;
            //     if (target.tagName != 'P') return;
            //     alert(response[i].id);
            // };

//             document.addEventListener('click', function(event) {
//                 let target = event.target;
//                 if (target.dataset-test != response[i].id) return;
//                 alert("response[i].id");
//
//             });

            if (res) {
                fetch("uploadForm.php", {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(function (response) {
                            document.querySelector(".header").innerHTML = "";
                            document.querySelector(".content").innerHTML = "";
                            app.Header.draw("");
                            app.Header2.draw("");
                            // AdsBoard.PageMyAds.draw();
                            console.log(response)
                            for (let i = 0; i < response.length; i++) {
                                function createMainDiv() {
                                    let content = document.querySelector(".content");
                                    let divElementMains = document.createElement("div");
                                    divElementMains.classList.add("boardAds");
                                    content.append(divElementMains);
                                    let divElementMain = document.createElement("div");
                                    divElementMain.classList.add("imageDescriptionPrice")
                                    divElementMains.append(divElementMain);
                                    let imagesAndPhone = document.createElement("div");
                                    imagesAndPhone.classList.add("imagesAndPhone");
                                    let img = document.createElement("div");
                                    img.classList.add("image");
                                    imagesAndPhone.append(img)
                                    let descriptionDivAndSalesman = document.createElement("div");
                                    descriptionDivAndSalesman.classList.add("description-salesman");
                                    let descriptionDiv = document.createElement("div");
                                    let descriptionP = document.createElement("p");
                                    descriptionDiv.append(descriptionP);
                                    descriptionP.innerHTML = response[i].description;
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
                                    elementP.setAttribute("dataset-test", response[i].id)
                                    elementP.onclick = function (event) {
                                        let target = event.target;
                                        if (target.tagName != 'P') return;
                                        document.querySelector(".header").innerHTML = "";
                                        document.querySelector(".content").innerHTML = "";
                                        console.log("this response", response[i].id);
                                        AdsBoard.FormPage.draw();
                                    };
                                    divElementPhone.append(elementP);
                                    change.append(divElementPhone);
                                    changePriceAndChange.append(change);

                                    let divElement = document.createElement("div");
                                    divElement.classList.add("delete")
                                    let paragraphElement = document.createElement("p")
                                    paragraphElement.append(document.createTextNode("Удалить"));
                                    paragraphElement.onclick = function (event) {
                                        let target = event.target;
                                        if (target.tagName != 'P') return;
                                        document.querySelector(".header").innerHTML = "";
                                        document.querySelector(".content").innerHTML = "";
                                        console.log("this response", response[i].id);
                                        function removePost() {
                                            fetch("uploadForm.php", {
                                                method: 'DELETE',
                                            })
                                                .then(function (response) {
                                                    document.querySelector(".header").innerHTML = "";
                                                    document.querySelector(".content").innerHTML = "";
                                                    AdsBoard.FormPage.draw();
                                                }).catch(function (error) {
                                                console.log(error);
                                            });
                                        }
                                        removePost();
                                        // let formData = new FormData();

                                        // console.log(id)
                                        // if (id) {
                                        //     console.log(id)
                                        //     // formData.append('id', id);
                                        //     fetch("uploadForm.php" + id, {
                                        //         method: 'DELETE'
                                        //         })
                                        //     let data = response.text();
                                        //     if(data.status === 200){
                                        //         console.log("ok")
                                        //     }
                                        //         .then(response => response.text())
                                        //         .then(response =>function (){
                                        //             if(response === "ok"){
                                        //                 console.log("hi")
                                        //             }
                                        //         }
                                        //     )
                                        // }

                                    };
                                    divElement.append(paragraphElement);
                                    change.append(divElement)
                                    let priceDiv = document.createElement("div");
                                    priceDiv.append(document.createTextNode(""));
                                    priceDiv.classList.add("price");
                                    priceDiv.innerHTML = response[i].price
                                    changePriceAndChange.append(priceDiv);
                                    divElementMain.append(imagesAndPhone, descriptionDivAndSalesman, changePriceAndChange)
                                    return divElementMain;
                                }
                                createMainDiv();
                            }
                        }
                    );
            }
        }
    }
})(AdsBoard);



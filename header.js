(function (app) {
    app.Header = {
        draw: function (a) {
            let header = document.querySelector(".header")
            let divElementMain = createMainDiv();
            header.append(
                divElementMain,
            );
        }
    }
    app.Header2 = {
        draw: function (a) {
            let header = document.querySelector(".header");
            let headerRight = createHeaderRight();
            let nav = createNav();

            header.append(
                nav,
                headerRight
            );
            let ribbonHeader = document.querySelector(".ribbon");
            ribbonHeader.addEventListener("click", ribbon);

            let adsHeader = document.querySelector(".MyAds");
            adsHeader.addEventListener("click", ads);

            let menuBtn = document.querySelector('.burger');
            let menu = document.querySelector('.menu');
            menuBtn.addEventListener('click', function () {
                menu.classList.toggle('active');
            })
            let exitId = document.querySelector('#exit');
            exitId.addEventListener('click', exit)

            function ads(){
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML = "";
                return AdsBoard.PageMyAds.draw();
            }
            function ribbon(){
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML = "";
                return AdsBoard.PageAds.draw();
            }
            function exit(){
                document.querySelector(".content").innerHTML = "";
                document.querySelector(".header").innerHTML = "";
                return AdsBoard.PageLogin.draw();
            }
        }
    }

    function createMainDiv() {
        let divElement = document.createElement("div");
        divElement.append(document.createTextNode("Объявления.RU"));
        divElement.classList.add("ads");
        divElement.setAttribute("name", "ads");
        return divElement
    };

    function createHeaderRight() {
        let divElement = document.createElement("div");
        divElement.classList.add("header_right");
        divElement.setAttribute("name", "header_right");
        return divElement;
    }

    function createHeaderRight() {
        let divElement = document.createElement("div");
        divElement.classList.add("burger");
        divElement.setAttribute("id", "trigger");
        let spanElement1 = document.createElement("span");
        let spanElement2 = document.createElement("span");
        let spanElement3 = document.createElement("span");
        divElement.append(spanElement1);
        divElement.append(spanElement2);
        divElement.append(spanElement3);
        return divElement;
    }

    function createNav() {
        let divElement = document.createElement("div");
        let navElement = document.createElement("nav");
        divElement.append(navElement);
        let ulElement = document.createElement("ul");
        let liElement = document.createElement("li");
        let aElement = document.createElement("a");
        aElement.append(document.createTextNode("Лента"));
        aElement.setAttribute("href", "#");
        aElement.classList.add("ribbon")
        liElement.append(aElement);
        ulElement.append(liElement);

        let liElement2 = document.createElement("li");
        let aElement2 = document.createElement("a");
        aElement2.append(document.createTextNode("Мои объявления"));
        aElement2.setAttribute("href", "#");
        aElement2.classList.add("MyAds")
        liElement2.append(aElement2);
        ulElement.append(liElement2);


        let liElement3 = document.createElement("li");
        let aElement3 = document.createElement("a");
        aElement3.append(document.createTextNode("Добавить"));
        aElement3.setAttribute("href", "#");
        aElement3.classList.add("add")
        liElement3.append(aElement3);
        ulElement.append(liElement3);

        let liElement4 = document.createElement("li");
        let aElement4 = document.createElement("a");
        aElement4.append(document.createTextNode("Выход"));
        aElement4.setAttribute("href", "#");
        aElement4.setAttribute("id", "exit");
        liElement4.append(aElement4);
        ulElement.append(liElement4);

        navElement.append(ulElement);
        navElement.classList.add("menu");
        navElement.setAttribute("name", "menu");
        return navElement;
    }

})(AdsBoard);

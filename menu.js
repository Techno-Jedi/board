(function (app) {
    app.Menu = {
        create: function () {
            let menuList = createMenuList();

            menuList.append(createMenuItemFeed());
            menuList.append(createMyAds());
            menuList.append(createMenuItemAppend());
            menuList.append(createMenuLogout());
    
            let divElement = document.createElement("div");
            let navElement = createNavElement();
    
            navElement.append(menuList);
            divElement.append(navElement);
    
            return divElement;

        }
    }
    function createMenuList(){
        return  document.createElement("ul");
    }

    function createNavElement(){
        let navElement = document.createElement("nav");

        navElement.classList.add("menu");
        navElement.setAttribute("name", "menu");

        return navElement;
    }

    function createMenuItemFeed(){
        let liElement = document.createElement("li");
        let aElement  = document.createElement("a");

        aElement.append(document.createTextNode("Лента"));
        aElement.classList.add("ribbon")
        liElement.append(aElement);

        return liElement;
    }

    function createMyAds(){
        let liElement2 = document.createElement("li");
        let aElement2  = document.createElement("a");

        aElement2.append(document.createTextNode("Мои объявления"));
        aElement2.classList.add("MyAds")
        liElement2.append(aElement2);

        return liElement2;
    }

    function createMenuItemAppend(){
        let liElement3 = document.createElement("li");
        let aElement3  = document.createElement("a");

        aElement3.append(document.createTextNode("Добавить"));
        aElement3.classList.add("add")
        liElement3.append(aElement3);

        return liElement3
    }

    function createMenuLogout(){
        let liElement4 = document.createElement("li");
        let aElement4  = document.createElement("a");

        aElement4.append(document.createTextNode("Выход"));
        aElement4.setAttribute("id", "exit");
        liElement4.append(aElement4);

        return liElement4;
    }

})(AdsBoard);
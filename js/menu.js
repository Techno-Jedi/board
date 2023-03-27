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
        return document.createElement("ul");
    }
    function createNavElement(){
        let navElement = document.createElement("nav");

        navElement.classList.add("menu");
        navElement.setAttribute("name", "menu");

        return navElement;
    }
    function createMenuItemFeed(){
        let addMenuItemList = document.createElement("li");
        let addMenuItemLink  = document.createElement("a");

        addMenuItemLink.append(document.createTextNode("Лента"));
        addMenuItemLink.classList.add("ribbon")
        addMenuItemList.append(addMenuItemLink);

        return addMenuItemList;
    }
    function createMyAds(){
        let addMenuItemList = document.createElement("li");
        let addMenuItemLink  = document.createElement("a");

        addMenuItemLink.append(document.createTextNode("Мои объявления"));
        addMenuItemLink.classList.add("MyAds")
        addMenuItemList.append(addMenuItemLink);

        return addMenuItemList;
    }
    function createMenuItemAppend(){
        let addMenuItemList = document.createElement("li");
        let addMenuItemLink  = document.createElement("a");

        addMenuItemLink.append(document.createTextNode("Добавить"));
        addMenuItemLink.classList.add("add")
        addMenuItemList.append(addMenuItemLink);

        return addMenuItemList
    }
    function createMenuLogout(){
        let addMenuItemList = document.createElement("li");
        let addMenuItemLink  = document.createElement("a");

        addMenuItemLink.append(document.createTextNode("Выход"));
        addMenuItemLink.setAttribute("id", "exit");
        addMenuItemList.append(addMenuItemLink);

        return addMenuItemList;
    }

})(AdsBoard);
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
        let li = document.createElement("li");
        let a  = document.createElement("a");

        a.append(document.createTextNode("Лента"));
        a.classList.add("ribbon")
        li.append(a);

        return li;
    }

    function createMyAds(){
        let li = document.createElement("li");
        let a  = document.createElement("a");

        a.append(document.createTextNode("Мои объявления"));
        a.classList.add("MyAds")
        li.append(a);

        return li;
    }

    function createMenuItemAppend(){
        let li = document.createElement("li");
        let a  = document.createElement("a");

        a.append(document.createTextNode("Добавить"));
        a.classList.add("add")
        li.append(a);

        return li
    }

    function createMenuLogout(){
        let li = document.createElement("li");
        let a  = document.createElement("a");

        a.append(document.createTextNode("Выход"));
        a.setAttribute("id", "exit");
        li.append(a);

        return li;
    }

})(AdsBoard);
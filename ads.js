(function (app) {
    app.PageAds = {
        draw: function () {
            document.querySelector(".header").innerHTML = "";
            app.Header.draw("");
            app.HeaderNavigationMenu.draw("");
       }
    }
})(AdsBoard);
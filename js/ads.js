(function (app) {
    app.PageAds = {
        draw: function (user_id) {
            document.querySelector(".header").innerHTML = "";
            app.Header.draw(user_id);
            app.HeaderNavigationMenu.draw(user_id);
       }
    }
})(AdsBoard);
(function (app) {
    app.PageAds = {
        draw: function () {
            document.querySelector(".header").innerHTML = "";
            app.Header.draw("");
            app.Header2.draw("");
       }
    }
})(AdsBoard);
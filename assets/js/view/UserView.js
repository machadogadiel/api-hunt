class UserView {
    showErrorStyle(element) {
        if (element.hasClass("api-hunt-wrong-input")) {
            element.removeClass("api-hunt-wrong-input")
        } else {
            element.addClass("api-hunt-wrong-input")
        }
    }
}
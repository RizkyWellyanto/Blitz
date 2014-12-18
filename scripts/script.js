/**
 * Created by Muhammad Rizky on 8/3/14.
 */

$(document).ready(function () {
    'use strict';

    /*
     * MVC structure
     */
    var model = {
        // savePage method, savePage state into local storage
        savePage: function (event) {
            // save the current page
            var currentPage = event.target.id.replace("button", "").replace("text", "").toLowerCase();
            localStorage.setItem("currentPage",currentPage);
        }
    };
    var view = {
        // show stuff to the user
        loadAjaxContent: function (event) {
            // load the content panel to the respective request
            var targetFile = event.target.id.replace("button", "").replace("text", "").toLowerCase();
            $("#panelContent").load("../ajax/" + targetFile + ".html #panelContent");
        },
        clearTextSearch: function (event) {
            $(textSearch).val("");
        }
    };
    var controller = {
        // click event handler
        click: function (event) {
            // clear the text search
            if (event.target.id === "textSearch") {
                view.clearTextSearch(event);
            }

            // save any important stuff
            model.savePage(event);

            // load the ajax content to the page
            view.loadAjaxContent(event);

            // call the checkPage method
            controller.checkPage(event);
        },
        // keypress event handler
        keypress: function (event) {
            if (event.target.id === textSearch) {
                if (event.which == 13) {
                    if ($("textSearch").val() != "") {
                        // search the keyword
                    }
                }
            }
        },
        // specific page functions
        checkPage: function (event) {
            // read the current page
            var page = localStorage.getItem("currentPage");

            // call and do specific methods/stuffs depending on the current page
            if (page === "browse"){
                // loop through every JSON object

                    // load the essay's JSON object to the content

                    // put it in a listed manner

                    // put a button or link to the respective essayPage

            }
        }
    };

    // adding event handler
    $("input").on('click', controller.click).keypress(controller.keypress);

    // additional startup function
    $("#panelContent").load("../ajax/home.html #panelContent");
});
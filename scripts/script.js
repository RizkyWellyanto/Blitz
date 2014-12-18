/**
 * Created by MuhammadRizky on 8/3/14.
 */

$(document).ready(function () {
    'use strict';

    // call back function of getting ajax data
    function getAjaxData(event) {
        // when the home button is clicked
        if(event.target.id === "buttonHome"){
            // load the content of the home page
            $("#panelContent").load("../AJAX/home.html #panelContent", loaded);

            // load the panel bottom
            $("#panelBottom").load("../AJAX/home.html #panelBottom", loaded);
        }
        // when the about button is clicked
        else if (event.target.id === "buttonAbout"){
            // load the content of the about page
            $("#panelContent").load("../AJAX/about.html #panelContent", loaded);

            // load the panel bottom
            $("#panelBottom").load("../AJAX/about.html #panelBottom", loaded);
        }
        // when the browse button is clicked
        else if (event.target.id === "buttonBrowse") {
            // load the content of the browse page
            $("#panelContent").load("../AJAX/browse.html #panelContent", loaded);

            // load the panel bottom
            $("#panelBottom").load("../AJAX/browse.html #panelBottom", loaded);
        }
        // when the account button is clicked
        else if (event.target.id === "buttonAccount") {
            // load the content of the account page
            $("#panelContent").load("../AJAX/account.html #panelContent", loaded);

            // load the panel bottom
            $("#panelBottom").load("../AJAX/account.html #panelBottom", loaded);
        }
        // when the account register is clicked
        else if (event.target.id === "buttonRegister") {
            // load the content of the register page
            $("#panelContent").load("../AJAX/register.html #panelContent", loaded);

            // load the panel bottom
            $("#panelBottom").load("../AJAX/register.html #panelBottom", loaded);
        }
        // when the social media button is clicked
        else if (event.target.id === "buttonSocialMedia") {
            // load the social media
            // will be further developed in the future
        }
        // when the user clicked the browse text
        else if (event.target.id === "textSearch"){
            $(textBrowse).val("");
        }
        // when the user clicked the search button
        else if (event.target.id === "buttonSearch"){
            // move to search the result
            // will be developed much further
        }
    }

    // callback function for future development
    var loaded = function() {
        // alert( "Load was performed." );
    };

    // Register event handlers
    $("input").on('click', getAjaxData);
});
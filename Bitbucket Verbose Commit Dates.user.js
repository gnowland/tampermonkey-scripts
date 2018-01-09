// ==UserScript==
// @name         Bitbucket Verbose Commit Dates
// @namespace    http://bitbucket.org/
// @version      0.1
// @description  Display Verbose Dates on Commits page of Bitbucket.org
// @author       Gifford Nowland
// @match        bitbucket.org/*/commits/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/* jshint -W097 */
(function( $ ) {
    'use strict';

    // Show commit time
    function showTime(){
        var $commitTime = $(".commit-list .date time");
        $commitTime.each(function() {
            $(this).text($(this).attr("title"));
        });
    }

    // Hide bitbucket avatar
    function hideAvatar(){
        var $authorImage = $(".aui-avatar");
        $authorImage.each(function() {
            $(this).unwrap();
            $(this).hide();
        });
    }

    // Page load
    $(document).ready(function() {
        // Setup buttons
        $(".commit-list .date > div").css("width","auto");
        $(".app-header--secondary").append('<button id="showtime">Show Time</button>');
        $(".app-header--secondary").append('<button id="hideavatar">Hide Avatar</button>');

        // Handle click
        $("#showtime").click(function(){ showTime(); });
        $("#hideavatar").click(function(){ hideAvatar(); });
    });
})(jQuery);

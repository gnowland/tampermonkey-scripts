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

    $(document).ready(function() {
        $(".commit-list .date > div").css("width","auto");
        $(".app-header--secondary").append('<button id="showtime" onclick="showTime();">Show Time</button>');
        $(".app-header--secondary").append('<button id="showtime" onclick="hideAvatar();">Hide Avatar</button>');
    });

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
})(jQuery);

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

    var itsShowTime = false;

    // Show commit time
    function showTime(){
        var $commitTime = $(".commit-list .date time");
        $commitTime.each(function() {
            var time = $(this).attr("title").substr(-5, 5);
            // $(this).text($(this).attr("title"));
            $(this).closest('.date').next('.status').html(time);
        });
        var itsShowTime = true;
    }

    // Hide bitbucket avatar
    function hideAvatar(){
        var $authorImage = $(".aui-avatar");
        $authorImage.each(function() {
            $(this).unwrap();
            $(this).hide();
        });
    }

    // Unlink commit
    function unlinkCommit(){
        var $commitHash = $(".commit-list a.hash");
        $commitHash.each(function() {
            var hash = this.text;
            $(this).parent().html(hash);
        });
    }

    // Page load
    $(document).ready(function() {
        // Add boxes & styles
        var buttonLocation = $(".app-header--secondary");
        $(".commit-list .date > div").css("width","auto");
        buttonLocation.css({'position': 'fixed', 'right': '10px', 'top': '10px', 'z-index': '1000', 'flex-direction': 'column', 'max-width': '150px'});
        buttonLocation.append('<button id="showtime">Show Time</button>');
        buttonLocation.append('<button id="hideavatar">Hide Avatar</button>');
        buttonLocation.append('<button id="unlinkcommit">Unlink Hash</button>');
        buttonLocation.append('<button id="doall">DO ALL</button>');
        $(".app-header--secondary button").css({'width': '100%', 'margin': '3px'});

        // Fire click event
        $("#showtime").click(function(){ showTime(); $(".commit-list thead .status").html("Time"); });
        $("#hideavatar").click(function(){ hideAvatar(); });
        $("#unlinkcommit").click(function(){ unlinkCommit(); });
        $("#doall").click(function(){ showTime(); $(".commit-list thead .status").html("Time"); hideAvatar(); unlinkCommit(); });
    });

    // Handle change
    $( ".commit-list .date time" ).change(function() {
        if (itsShowTime === true) { showTime(); }
    });
})(jQuery);

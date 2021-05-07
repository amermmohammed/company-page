import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all.min';
$(function() {
    $('.thumbnail2').hover(function() {
            $(this).find('.project-category').hide();
            $(this).find('.caption2').slideDown(250);
        },
        function() {
            $(this).find('.caption2').slideUp(250);
            $(this).find('.project-category').show();
        }
    );
});
var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = "all rights reserved " + year + "&copy;";
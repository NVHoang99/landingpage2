$(document).ready(
    function () {
        // sticky navbar
        $('.about-section').waypoint(
            function(direction){
                if (direction == "down") {
                    $('nav.header__top').addClass('sticky');
                } else {
                    $('nav.header__top').removeClass('sticky');
                }
            }, {
                offset: '400px'
            }
        );

        //scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            event.preventDefault();
        });

        //
        $('.nav-mobile__list li').click(function(event){
            //$("#nav-input").prop("checked", false); jquery syntax
            var checkbox = document.getElementById("nav-input");
            checkbox.checked = false;
        });
    }
);
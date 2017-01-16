/*---LEFT BAR ACCORDION----*/

var Script = function () {


//    sidebar toggle

    $(function() {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar').css({
                    '-webkit-transform': 'translate3d(-100%,0,0)',
                    'transform': 'translate3d(-100%,0,0)'
                });
                $('#sidebar > ul').hide();
                $("#main-content").removeClass("dimmed");
            }

            if (wSize > 768) {
                $('#container').removeClass('sidebar-close');
                $('#sidebar').css({
                    '-webkit-transform': 'translate3d(0,0,0)',
                    'transform': 'translate3d(0,0,0)'
                });
                $('#sidebar > ul').show();
            }
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });

    $('.fa-bars').click(function () {
        if ($('#sidebar > ul').is(":visible") === true) {
            $('#main-content').css({
                'margin-left': '0px'
            });
            $('#sidebar').css({
                '-webkit-transform': 'translate3d(-100%,0,0)',
                'transform': 'translate3d(-100%,0,0)'
            });
            $('#sidebar > ul').hide();
            $("#container").addClass("sidebar-closed");
            $("#main-content").removeClass("dimmed");
        } else {
            $('#main-content').css({
                'margin-left': '100px'
            });
            $('#sidebar > ul').show();
            $('#sidebar').css({
                '-webkit-transform': 'translate3d(0,0,0)',
                'transform': 'translate3d(0,0,0)'
            });
            $("#container").removeClass("sidebar-closed");
            $("#main-content").addClass("dimmed");
        }
        $('.sidebar-close .dimmed').click(function () {
            $('#main-content').css({
                'margin-left': '0px'
            });
            $('#sidebar').css({
                '-webkit-transform': 'translate3d(-100%,0,0)',
                'transform': 'translate3d(-100%,0,0)'
            });
            $('#sidebar > ul').hide();
            $("#container").addClass("sidebar-closed");
            $("#main-content").removeClass("dimmed");
        });
    });

// custom scrollbar
    $("#sidebar").niceScroll({styler:"fb",cursorcolor:"#e8403f", cursorwidth: '3', cursorborderradius: '10px', background: '#404040', spacebarenabled:false, cursorborder: ''});

    $("html").niceScroll({styler:"fb",cursorcolor:"#e8403f", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000'});


}();
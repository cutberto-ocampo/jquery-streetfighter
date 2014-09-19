var ryuThrowing, ryuReady, ryuStill, ryuCool, hadouken;

$(document).ready(function () {
    ryuThrowing = $('.ryu-throwing');
    ryuReady = $('.ryu-ready');
    ryuStill = $('.ryu-still');
    ryuCool = $('.ryu-cool');
    hadouken = $('.hadouken');

    $('.ryu').mouseenter(function () {
        ryuStill.hide();
        ryuReady.show();
    }).mouseleave(function () {
        ryuReady.hide();
        ryuStill.show();
    }).mousedown(function () {
        if (hadouken.length) {
            playHadouken();
        }
        ;

        ryuReady.hide();
        ryuThrowing.show();
        hadouken.finish().show().animate(
            {'left': '300px'},
            500,
            function () {
                $(this).hide();
                $(this).css('left', '-210px');
            });
    }).mouseup(function () {
        ryuThrowing.hide();
        ryuReady.show();
    });

    $('body').keydown(function (event) {
        if (event.which == 88) {
            event.preventDefault();
            ryuThrowing.detach();
            ryuReady.detach();
            ryuStill.detach();
            hadouken.finish().detach();
            $('#hadouken-sound')[0].currentTime = 0;
            $('#hadouken-sound')[0].pause();
            ryuCool.show();
        }
        ;
    }).keyup(function (event) {
        if (event.which == 88) {
            ryuCool.hide();
            ryuThrowing.prependTo($('.ryu'));
            ryuReady.prependTo($('.ryu'));
            ryuStill.prependTo($('.ryu'));
            $('.ryu').after(hadouken);
        }
    });
});

function playHadouken() {
    var hadoukenSound = $('#hadouken-sound');
    hadoukenSound[0].volume = 0.5;
    hadoukenSound[0].load();
    hadoukenSound[0].play();
}
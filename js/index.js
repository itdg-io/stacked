
/******************** Sign Up ************************* */

$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
    $('.my-card:nth-child(' + $even + ')').addClass('active');
    $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
    $('.my-card:nth-child(' + $odd + ')').addClass('active');
    $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

// $('.my-card').click(function () {
//     $slide = $('.active').width();
//     console.log($('.active').position().left);

//     if ($(this).hasClass('next')) {
//         $('.card-carousel').stop(false, true).animate({ left: '-=' + $slide });
//     } else if ($(this).hasClass('prev')) {
//         $('.card-carousel').stop(false, true).animate({ left: '+=' + $slide });
//     }

//     $(this).removeClass('prev next');
//     $(this).siblings().removeClass('prev active next');

//     $(this).addClass('active');

//     /*if ($(this).prev().length <= 0) {
//         $('.my-card:nth-child(3)').addClass('prev')
//     }


//     if ($(this).next().length <= 0) {
//         $('.my-card:nth-child(1)').addClass('next')
//     }*/

//     $(this).prev().addClass('prev');
//     $(this).next().addClass('next');
// });


$('.my-card').click(function () {

    if ($(this).hasClass('posx-2')) return;

    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');

    if ($(this).hasClass('posx-1')) {
        $(this).removeClass('posx-1');
        for (var sibling of $(this).siblings()) {
            if ($(sibling).hasClass('posx-2')) {
                $(sibling).removeClass('posx-2');
                $(sibling).addClass('posx-3 next');
            } else if ($(sibling).hasClass('posx-3')) {
                $(sibling).removeClass('posx-3');
                $(sibling).addClass('posx-1 prev');
            }
        }
    }

    if ($(this).hasClass('posx-3')) {
        $(this).removeClass('posx-3');
        for (var sibling of $(this).siblings()) {
            if ($(sibling).hasClass('posx-2')) {
                $(sibling).removeClass('posx-2');
                $(sibling).addClass('posx-1 prev');
            } else if ($(sibling).hasClass('posx-1')) {
                $(sibling).removeClass('posx-1');
                $(sibling).addClass('posx-3 next');
            }
        }
    }

    $(this).addClass('posx-2');
    $(this).addClass('active');

    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function (e) {
    if (e.keyCode == 37) { // left
        $('.active').prev().trigger('click');
    }
    else if (e.keyCode == 39) { // right
        $('.active').next().trigger('click');
    }
});
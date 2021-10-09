
/* ----  ---- */


$('input[type="range"]').on('input', function () {
    var show_range_price = $(this).val()
    $('.show_range_price').html(show_range_price + ' $');
    // $('input[type="range"]').change('input', function () {

    // })
    var priceR = $('.card').find('.price').html();

    console.log(priceR)


    priceR.each(function () {
        $('#pizza_cards').html(priceR)
        console.log(priceR)
    })
});

/* For the sticky navigation */
$('.js--section-features').waypoint(function (direction) {
    if (direction == "down") {
        $('nav').addClass('sticky')
        // $('.create-pizza-nav').css('display', 'block')
    } else {
        $('nav').removeClass('sticky');
    }
}, {
    offset: '60px;'
});

$('input[name="favoritCategory"]').click(function () {
    var selectedVal = $(this).val();
    console.log(selectedVal);

    if (selectedVal == "Meat") {
        $('#pizza_cards').find('.meat_pizza').prependTo('#pizza_cards');
    }
    if (selectedVal == "Cheese") {
        $('#pizza_cards').find('.cheese_pizza').prependTo('#pizza_cards');
    }
    if (selectedVal == "Vegeterian") {
        $('#pizza_cards').find('.vegeterian_pizza').prependTo('#pizza_cards');
    }
    if (selectedVal == "Seafood") {
        $('#pizza_cards').find('.seafood_pizza').prependTo('#pizza_cards');
    }
});


$(document).ready(function () {

    if (localStorage.getItem('shoplistlocal')) {
        $('.list').html(localStorage.getItem('shoplistlocal'));
        $('.total-price').html(localStorage.getItem('countLocal'));
    }


    $(".add-item").on("click", function (e) {
        $('.count').css({ "display": "block" });
        $('.total-price').css({ "display": "block" });
        var itemName = $(this).siblings(".itemName").html();
        console.log(itemName);
        var price = $(this).siblings('p').children('.price').html();
        $('.list').append('<li>' + itemName + '<span>' + price + '$' + '</span>' + '<button class="item">x</button>' + '</li>');
        console.log(price);

        $('.total-price').change(function () {
        });
        var subtotal = 0.0;

        $(".list").on("click", ".item", function () {
            $(this).closest('li').remove();
            $('.count').css({ "display": "block" });
            $(this).find('p').remove();
            $('.total-price').css({ "display": "block" });
            var shoplistlocal = $('.list').html();
            var countLocal = $('.total-price').html();
            localStorage.setItem('shoplistlocal', shoplistlocal, 'countLocal', countLocal);
            return false;
        });

        $('.add-item').click(function () {
            var itemlength = $(".app-body li").length;
            $('.count').text(itemlength);
        });

        $('.closewindow').click(function () {
            $('#shopping-cart').fadeOut(500);
        });
        $('.tray').click(function () {
            $('#shopping-cart').fadeIn(500);
        });

        $(".clear-all").click(function () {
            window.localStorage.clear();
            $('.list').children().remove();
            $('.total-price').children().remove();
            $('.count').hide();
            return false;
        });

    });
})

/*---- POP-UP WINDOW ----*/

$(document).ready(function () {

    $('.linkModal').click(function (event) {
        event.preventDefault();
        $('#myOverlay').fadeIn(297, function () {
            $('#myModal')
                .css('display', 'block')
                .animate({ opacity: 1 }, 198);
        });
    });

    $('#myModal__close, #myOverlay').click(function () {
        $('#myModal').animate({ opacity: 0 }, 198,
            function () {
                $(this).css('display', 'none');
                $('#myOverlay').fadeOut(297);
            });
    });


    /* Add size */
    $('#pizza-size input[name="size"]').on('change', function () {
        var size = $(this).val();
        $('.size').html(size);
    });

    /* Add saoce */
    $('#addSauce').click(function () {
        var sauce = $('#selectSauce :selected').text();
        $('.sauce').html(sauce + '<button class="btn btn-cart remove">x</button>')
    });

    $('#right-side').on('click', '.remove', function () {
        $('.sauce').empty()
    });

    /* Disabled add button */
    var submit = $('#popUp-addButton');
    submit.prop('disabled', true);
    submit.addClass('popUp-addButton');

    $('#pizza-size').change(function () { //'input change keyup paste'
        if ($(this).length != 0) {
            submit.removeClass('popUp-addButton')
            submit.prop('disabled', false);
        }
    });

    /* Add topping */
    var postTemplate

    postTemplate = $('#order-template').html();
    console.log(postTemplate);

    $('#addComp').click(function () {
        let selComp = {
            name: $('#selectItems :selected').text()
        };
        console.log(selComp);
        //console.log(obj);
        $('#comp').append(Mustache.render(postTemplate, selComp));
    });
});



function remove(obj) {
    obj.closest('p').remove();
};


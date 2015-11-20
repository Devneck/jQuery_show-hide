/* all code part 1 goes inside one anonymous function that runs when the page is finished loading */

$(document).ready(function(){

    $('h2').click(function(){
        if (!$(this).hasClass('minus')) {
            $(this).addClass('minus');
            $(this).next().addClass('open');
        } else {
            $(this).removeClass('minus');
            $(this).next().removeClass('open');
        }
    })

    $('#first_link').focus();
})
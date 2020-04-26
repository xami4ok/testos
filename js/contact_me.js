// Contact Form Scripts

$(function() {

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});


        // Mask
        jQuery(function($){
           $("#phone").mask("+7(999) 999-99-99");
        });

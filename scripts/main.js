// JavaScript Document
file = location.pathname.split("/").slice(-1)[0];
x = document.getElementsByTagName("nav")[0].getElementsByTagName("li");
var y;
for (var i = 0; i < x.length; i++) {
    y = x[i].innerHTML.split("\"")[1];
    if (y === file) {
        x[i].className = "active";
    }
}

$(window).on('load resize', function() {
    if(this.matchMedia('(min-width: 768px)').matches) {
        $('.dropdown').hover(
            function() {
                $(this).addClass('show')
                $(this).find($('.dropdown-toggle')).attr('aria-expanded', 'true')
                $(this).find($('.dropdown-menu')).addClass('show')
            }, function() {
                $(this).removeClass('show')
                $(this).find($('.dropdown-toggle')).attr('aria-expanded', 'false')
                $(this).find($('.dropdown-menu')).removeClass('show')
            }
        )
    }else{
        $('.dropdown').off('mouseenter mouseleave')
    }
})


$(document).ready(function(){
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
    M.updateTextFields();
    $('.modal').modal();
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

var SLIDE_SPEED = 400;
function initialize() {
    $('#new-form').hide();
    $('.x').on('click',removeLi);
    $('#submit').on('click',makeNewTodo);
    $('#add').on('click',function(){
        $('#new-form').slideDown(SLIDE_SPEED);
    });
    var lis = localStorage.getItem('lis');
    console.log(lis);
    lis = lis.split('^');
    for(var i = 0; i < lis.length; i++){
        if(lis[i].length != 0)
            createLi(lis[i].toString()); 
    }
    $(document).keypress(function(e) {
        if(e.which == 13) {
            var input = $('#input').val();
            if(input.length > 0){
                makeNewTodo(); 
        }
    }
});
}
function removeLi (){
    $(this.parentNode).slideUp(SLIDE_SPEED,function(){
    this.parentNode.removeChild(this);
        storeLis();
    });
}
function createLi (title){
    var newLi = document.createElement('li');
    newLi.innerHTML = '<span class="x">X</span> ' + title;
    newLi.firstChild.addEventListener('click',removeLi);
    newLi.firstChild.classList.add('x');
    $('ul').append(newLi);
    $('li:last-child').hide();
    $('li:last-child').slideDown(SLIDE_SPEED,function(){
        $('#new-form').slideUp(SLIDE_SPEED);
        storeLis();
    });
}
function makeNewTodo(){
    var title = $('#input').val();
    $('#input').val('');
    createLi(title);
}
function storeLis (){
    var x = $('li');
    var toReturn = "";
    for(var i = 0; i < x.length; i++){
        toReturn += "^" + x[i].innerText.substr(2);
    }
    localStorage.setItem('lis',toReturn);
    console.log(localStorage.getItem('lis'));
}
initialize();


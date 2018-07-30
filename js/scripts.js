function initialize() {
    $('#new-form').hide();
    $('.x').on('click',removeLi);
    $('#submit').on('click',makeNewTodo);
    $('#add').on('click',function(){
        $('#new-form').slideDown(200);
    });
    var lis = localStorage.getItem('lis');
    console.log(lis);
    lis = lis.split('^');
    for(var i = 0; i < lis.length; i++){
        if(lis[i].length != 0)
            createLi(lis[i].toString()); 
    }
}
function removeLi (){
    $(this.parentNode).slideUp(200,function(){
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
    $('li:last-child').slideDown(200,function(){
        $('#new-form').slideUp(200);
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


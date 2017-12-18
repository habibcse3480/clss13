/**
 * Created by Web App Develop-PHP on 12/11/2017.
 */

// var newHeadingElement = document.createElement('h1');
// var newparagraphElement = document.createElement('p');
//
// newHeadingElement.innerHTML='This is a heading';
// newparagraphElement.innerHTML='This is a paragrpah';
// document.getElementById('div').appendChild(newHeadingElement);
// document.getElementById('div').appendChild(newparagraphElement);

var btn= document.getElementById('btn');

btn.onclick=function () {
    var newHeadingElement = document.createElement('h1');
    var newparagraphElement = document.createElement('p');

    newHeadingElement.innerHTML='This is a heading';
    newparagraphElement.innerHTML='This is a paragrpah';
    document.getElementById('div').appendChild(newHeadingElement);
    document.getElementById('div').appendChild(newparagraphElement);
}

$('#h1').click(function () {
    $('#btn').css({
        'color':'red',
        'background-color':'black'
    });
});









$('#submitbtn').click(function () {

    var firstName= $('#firstName').val();
    var lastName= $('#lastName').val();

    var fullName = firstName+''+lastName;
    $('#fullName').html(fullName);



});
$('#img2').click(function () {
   var imgurl= $(this).attr('src');
    $('#mainImage').attr('src',imgurl);

});
$('#img3').click(function () {
    var imgurl= $(this).attr('src');
    $('#mainImage').attr('src',imgurl);

});
$('#img4').click(function () {
    var imgurl= $(this).attr('src');
    $('#mainImage').attr('src',imgurl);

});
$('#img1').click(function () {
    var imgurl= $(this).attr('src');
    $('#mainImage').attr('src',imgurl);

});











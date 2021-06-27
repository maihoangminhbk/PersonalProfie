function changeColor() {
    var aside = document.getElementById('aside');
    var header = document.getElementById('header');
    var footer = document.getElementById('footer');
    var body = document.getElementById('body');
    var image = document.getElementById('profile-img');
    if(aside.style.backgroundColor == 'gray') {
        aside.style.backgroundColor = 'coral';
        header.style.backgroundColor = '#ff3a10';
        footer.style.backgroundColor = '#ff3a10';
        image.style.backgroundColor = '#ffb497';
        image.style.borderColor = '#ff7053';
        body.style.backgroundColor = 'white';


    } else {
        aside.style.backgroundColor = 'gray';
        header.style.backgroundColor = '#3e3e3e';
        footer.style.backgroundColor = '#3e3e3e';
        image.style.backgroundColor = '#d0d0d0';
        image.style.borderColor = '#3e3e3e';
        body.style.backgroundColor = '#c9c9c9';
    }
}
var check = 0;

function changeLayout() {
    var aside = document.getElementById('aside');
    var content = document.getElementById('content');

    if(check == 0) {
        aside.style.float = 'none';
        content.style.float = 'none';
        aside.style.height = '400px';
        aside.style.maxWidth = '1000px';

        aside.style.margin = 'auto';
        content.style.margin = 'auto';
        check = 1;
    } else {

        aside.style.float = 'left';
        content.style.float = 'left';
        aside.style.height = '600px';
        aside.style.maxWidth = '600px';

        aside.style.margin = 'unset';
        content.style.margin = 'unset';
        aside.style.marginTop = '20px';
        check = 0;

    }
}
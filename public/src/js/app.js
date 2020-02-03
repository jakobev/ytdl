const axios = require('axios');


const form = document.getElementById('form');

function submit(){
    var i = document.getElementById('url');
    if(i.value !== '' && i.value){
        form.submit();
    }else{
        alert('You have to enter valid youtube url');
        return;
    }
}

function resetInput(){
    const input = document.getElementById('url');
    input.value = '';
}
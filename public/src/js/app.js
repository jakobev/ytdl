const axios = require('axios');


const form = document.getElementById('form');

function submit(){
    form.submit();
}

function resetInput(){
    const input = document.getElementById('url');
    input.value = '';
}
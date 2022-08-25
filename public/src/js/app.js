const axios = require('axios');






    
    function schick(){
        console.log("fkapeokfgapofkgeapgfkea");
        var i = document.getElementById('url');
        console.log("input ", i.value);
        if(i.value !== '' && i.value){
            var form = document.getElementById('form');
            form.submit();
        }else{
            alert('You have to enter valid youtube url');
            return;
        }
    }
    
    function resetInput(){
        console.log("lalalala");
        var i = document.getElementById('url');
        console.log("input ", i.value);
        const input = document.getElementById('url');
        input.value = '';
    }

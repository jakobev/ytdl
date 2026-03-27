//const axios = require('axios');






    
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

async function checkUrl(url) {
        console.log("Checking url...");
        var status = document.getElementById("server-status-text")
        try {
            const response = await fetch(url, {method: 'GET'});

            if (response.ok) {
                console.log("Server status: Online");
                status.style.color = "#00FF00";
                status.textContent = "Online";
                
                return true;
            } else {
                console.log("Server status: " + response.status);
                return false;
            }
        } catch (error){
            console.error("Server Status: Offline");
            status.style.color = "#FF0000"
            status.textContent = "Offline";
        }

    }
    document.getElementById("check-server-btn").addEventListener("click", () =>
        checkUrl("https://heaven-serpentiform-olinda.ngrok-free.dev"));

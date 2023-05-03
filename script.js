var Btn = document.getElementById('Btn_Run');
var Seconds = document.getElementById('Seconds');
var Minutes = document.getElementById('Minutes');    
var Hours = document.getElementById('Hours');
var Btn_Stop = document.getElementById('Btn_Stop');
var Btn_Reset = document.getElementById('Btn_Reset');





Btn.onclick = function () {

   
    
    const changeTime = setInterval(function () 

    {Seconds.innerHTML = parseInt(Seconds.textContent)+1;

        Btn_Stop.onclick = function() {

            clearInterval(changeTime);
        };

        Btn_Reset.onclick = function () {

            Seconds.innerHTML = 0;
            Minutes.innerHTML = 0;
            Hours.innerHTML = 0;

        };

        if(Seconds.textContent === "60") {
            Seconds.innerHTML = 0;
            Minutes.innerHTML = parseInt(Minutes.textContent)+1;
        }

        if(Minutes.textContent === "60"){
            Minutes.innerHTML = 0;
            Hours.innerHTML = parseInt(Hours.textContent)+1;
        }




    
    }, 1000);
       


       
    
    
    
};





    

   

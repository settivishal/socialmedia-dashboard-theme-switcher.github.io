const toggles = document.getElementById("checkBox");
const modes = document.getElementById("mode");


function bgChange(){
    if(toggles.checked == true){
        setTimeout(function(){
            // ------------body toggle
            document.body.style.background = "hsl(230, 17%, 14%)";
            // ------------number font color toggle
            var numbers,a ;
            numbers = document.querySelectorAll(".count, .title-container, .dark-light");
            for (a = 0; a < numbers.length; a++) {
                numbers[a].style.color = "white";
            }

            // --------mode toggle
            modes.textContent = "Light Mode";

            // ----------top cards toggle
            var topCards,i ;
            topCards = document.querySelectorAll(".top ul");
            for (i = 0; i < topCards.length; i++) {
                topCards[i].style.background = "hsl(228, 28%, 20%)";
            }
            
            // --------bottomc  cards toggle
            var bottomCards,j ;
            bottomCards = document.querySelectorAll(".overview-container div");
            for (j = 0; j < bottomCards.length; j++) {
                bottomCards[j].style.background = "hsl(228, 28%, 20%)";
            }
        },50);
    }
    else{
        setTimeout(function(){
            // -----------body toggle
            document.body.style.background = "white";
            // ------------number font color toggle
            var numbers,a ;
            numbers = document.querySelectorAll(".count, .title-container, .dark-light");
            for (a = 0; a < numbers.length; a++) {
                numbers[a].style.color = "#222";
            }
            // --------mode toggle
            modes.textContent = "Dark Mode";
            

            // -----------top cards toggle
            var topCards,i ;
            topCards = document.querySelectorAll("ul");
            for (i = 0; i < topCards.length; i++) {
                topCards[i].style.background = "hsl(227, 47%, 96%)";
            }

            // ------------bottom cards toggle
            var bottomCards,j ;
            bottomCards = document.querySelectorAll(".overview-container div");
            for (j = 0; j < bottomCards.length; j++) {
                bottomCards[j].style.background = "hsl(227, 47%, 96%)";
            }
        },50);
    }
        
    
    
}

// hsl(227, 47%, 96%)
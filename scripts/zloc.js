function showScreens(){
    $('#zlscr1').delay(1500).animate({
        opacity:'1',
        left: '13%'                             
    },1500);
    $('#zlscr2').delay(300).animate({
        opacity:'1'                            
    },1500);
    $('#zlscr3').delay(1500).animate({
        opacity:'1',
        left: '57%'                             
    },1500);
};

function showDescription(){
    window.scroll({
    top: 700, 
    left: 0, 
    behavior: 'smooth' 
    });
}
function showTutorial(){
    window.scroll({
    top: 1300, 
    left: 0, 
    behavior: 'smooth' 
    });
}

function showPurchases(){
    window.scroll({
    top: 2000, 
    left: 0, 
    behavior: 'smooth' 
    });
}


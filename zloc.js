function showScreens(){
    $('#zlscr1').delay(1500).animate({
        opacity:'1',
        left: '23%'                             
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
    top: 1320, 
    left: 0, 
    behavior: 'smooth' 
    });
}
function showFirst(){
    $('#zlogo').delay(200).animate({opacity:'1'},1500);
    $('#ztitle').delay(400).animate({opacity:'1'},1500);
    $('#zdesc').delay(400).animate({opacity:'1'},1500);
    $('#zlget').delay(400).animate({opacity:'1'},1500);   $('#zlpixel').delay(700).animate({opacity:'1'},1500);
};

  var win = $(window);
  var flag = false;
  win.scroll(function(){
        var y = win.scrollTop();
             console.log(y);
      if(flag == false && y > 499){
          $('#arpixel').animate({
              opacity:'1',
              left: '65%'                            
          },1500);
          $('#arlogo').animate({
              opacity:'1',
              left: '15%'                            
          },1500);
          $('#artitle').animate({
              opacity:'1',
              left: '18%'                            
          },1500);
          $('#ardesc').animate({
              opacity:'1',
              left: '18%'                            
          },1500);
          $('#arget').animate({
              opacity:'1',
              left: '23%'                            
          },1500);
      }
  });

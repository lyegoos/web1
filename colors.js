var Links = {
  SetColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}

var Body = {
  SetColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  SetBackgroundColor:function(color){
      // document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor', color);
  }
}

function darkWhiteHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'dark mode'){
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    self.value = 'white mode';

    Links.SetColor('powderblue');
  } else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = 'dark mode';

    Links.SetColor('blue');
  }
}

function changeImg(imgElement, newImgSrc) {
    imgElement.src = newImgSrc;
}

function restoreImg(imgElement, originalImgSrc) {
    imgElement.src = originalImgSrc;
}

function bag(){
    alert("필수옵션이 모두 선택되어있지 않습니다.");
}

$(document).ready(function(){
    $(".option1-wrap").click(function(){
     var submenu = $(this).next(".hide1");
     if( submenu.is(":visible") ){
      submenu.slideUp();
      }else{
       submenu.slideDown();
       }
      })
});


$(document).ready(function(){
    $(".option2-wrap").click(function(){
     var submenu = $(this).next(".hide2");
     if( submenu.is(":visible") ){
      submenu.slideUp();
      }else{
       submenu.slideDown();
       }
      })
});


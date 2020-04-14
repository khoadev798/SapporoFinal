var imgAr = [];

var icons = [];
var gray_icons = [];

function loadImg1() {
  for (var i = 0; i < 5; i++) {
    imgAr[i] = new Image();
    imgAr[i].src = '../images/big'+i+'.jpg';
    console.log(imgAr[i].src);
    
  }
}

// function loadIcon() {
//   for (var k = 0; k < 4; k++) {
//     icons[k] = new Image();
//     gray_icons[k] = new Image();
//     icons[k].src = "../images/icon" + k + ".jpg";
//     gray_icons[k].src = "../images/gray-icon" + k + ".jpg";
//   }
// }

$(document).ready(function () {
    console.log(imgAr.length);
    //Slider 1 change
    $("#bar1").css("background-color", "white");   
    function changeSlide(num){
      for(var s = 1; s < 4; s++){
          if(num==s){
            $("#bar"+num).css("background-color","white");
            var margin = (s-1)*(-20);
            $(".s1").css("margin-left",margin+"%");
          }
          else{
            $("#bar"+s).css("background-color","transparent");
          }
      }
    }
    var slide1Current = 1;
    function runSlide(){
      if(slide1Current < 3){
        slide1Current++;
        changeSlide(slide1Current);
      }
      else{
        slide1Current = 1;
        changeSlide(slide1Current);
      }
      console.log(slide1Current);
    }
    var myVar1 = setInterval(runSlide,2000);
    

    $("#bar1").click(function(){
      slide1Current = 1;
      changeSlide(slide1Current);
      // $(".s1").css("margin-left","0%");
    });
    $("#bar2").click(function(){
      slide1Current = 2; 
      changeSlide(slide1Current);
      // $(".s1").css("margin-left","-20%");
    });
    $("#bar3").click(function(){
      slide1Current = 3;
      changeSlide(slide1Current);
      // $(".s1").css("margin-left","-40%");
    });



  // $(".expand-icon").click(function () {
  var src = $(".expand-icon").attr("src");
  //     if($(".expand-icon").attr("src")==="../images/ic_action_name.png"){
  //       console.log("true");
  //       $(".expand-icon").attr("src", "../images/Picture1.png");
  //     }
  //     else{
  //       $(".expand-icon").attr("src", "../images/ic_action_name.png");

  //     }
  //     $("#show-info").slideToggle("slow");      
  // });
  $("#line1-left-icon").click(function () {
    if ($(this).attr("src") === "../images/ic_action_name.png") {
      console.log("true");
      $(this).attr("src", "../images/Picture1.png");
    }
    else {
      $(this).attr("src", "../images/ic_action_name.png");
    }
    $("#show-info1").slideToggle("slow");
    $("#show-info1").css("background-color", "#e19a3e");
    $("#show-info1").html("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis dolor nisl. Ut consequat risus a turpis portitor, quis feugiat velit eleifend. Donec interdum elementum neque. Mauris interdum nibh vitae molestie commodo. Mauris parta felis sapien, vitae hendrerit arcu lacinia non. Sed sapien ipsum, ornare quis magna vitae, iaculis semper auge. Sed pulvinar odio in dictum euismod.</p><p>Morbi tincidunt sodales ipsum, nec porta magna tincidunt sit amet. Aenean porta justo ut molis imperdiet. Nunc varius velit quis nunc parta, quis.</p>");
  });
  $("#line1-right-icon").click(function () {
    if ($(this).attr("src") === "../images/ic_action_name.png") {
      console.log("true");
      $(this).attr("src", "../images/Picture1.png");
    }
    else {
      $(this).attr("src", "../images/ic_action_name.png");
    }
    $("#show-info1").slideToggle("slow");
    $("#show-info1").css("background-color", "#353535");
    $("#show-info1").html("Hinh 2");
  });

  $("#line2-left-icon").click(function () {
    if ($(this).attr("src") === "../images/ic_action_name.png") {
      console.log("true");
      $(this).attr("src", "../images/Picture1.png");
    }
    else {
      $(this).attr("src", "../images/ic_action_name.png");
    }
    $("#show-info2").slideToggle("slow");
    $("#show-info2").css("background-color", "#353535");
    $("#show-info2").html("Hinh 3");
  });
  $("#line2-middle-icon").click(function () {
    if ($(this).attr("src") === "../images/ic_action_name.png") {
      console.log("true");
      $(this).attr("src", "../images/Picture1.png");
    }
    else {
      $(this).attr("src", "../images/ic_action_name.png");
    }
    $("#show-info2").slideToggle("slow");
    $("#show-info2").css("background-color", "#facd92");
    $("#show-info2").html("Hinh 4");
  });
  $("#line2-right-icon").click(function () {
    if ($(this).attr("src") === "../images/ic_action_name.png") {
      console.log("true");
      $(this).attr("src", "../images/Picture1.png");
    }
    else {
      $(this).attr("src", "../images/ic_action_name.png");
    }
    $("#show-info2").slideToggle("slow");
    $("#show-info2").css("background-color", "#c6c6c6");
    $("#show-info2").html("Hinh 5");
  });

  $("#gallery-middle-icon").click(function () {
    if ($(this).attr("src") === "../images/ic_action_name.png") {
      console.log("true");
      $(this).attr("src", "../images/Picture1.png");
      $(".small-images-slider").height("15%");
      $(".last").css("bottom","-7.5%");
    }
    else {
      $(this).attr("src", "../images/ic_action_name.png");
      $(".small-images-slider").height("0%");
      $(".last").css("bottom","0%");

    }
    // $(".small-images-slider").slideToggle("slow");
    // $(".small-images-slider").css("visibility", "visible");
  });

  // for(var k = 0; k < 5; k++){
  //       $("#small-slider"+k).css("border", "1px solid white");
  // }
  $("#small-slider0").css("border", "1px solid white");
  function makeBorder(number) {
    for (var j = 0; j < imgAr.length; j++) {
      if (j == number) {
        $("#small-slider" + j).css("border", "1px solid white");
      }
      else {
        $("#small-slider" + j).css("border", "none");
      }
    }
  }
  $(".small-slider").click(function () {
    var src1 = $(this).css("background-image");
    console.log(src1);
    var src_num = src1.substring(src1.indexOf("big") + 3, src1.lastIndexOf(".jpg"));
    console.log(src_num);
    console.log(imgAr[parseInt(src_num)].src);
    $("#gallery-middle-image").attr("src", imgAr[parseInt(src_num)].src);
    makeBorder(src_num);
  });
  $("#previous").click(function () {
    var currentSrc = $("#gallery-middle-image").attr("src");
    var src_num = currentSrc.substring(currentSrc.indexOf("big") + 3, currentSrc.lastIndexOf(".jpg"));
    var num = parseInt(src_num);
    console.log(num);
    if (num == 0) {
      num = 4;
      $("#gallery-middle-image").attr("src", imgAr[num].src);
    }
    else if (num >= 0) {
      num--;
      $("#gallery-middle-image").attr("src", imgAr[num].src);
    }
    makeBorder(num);
  });

  $("#next").click(function () {
    var currentSrc = $("#gallery-middle-image").attr("src");
    var src_num = currentSrc.substring(currentSrc.indexOf("big") + 3, currentSrc.lastIndexOf(".jpg"));
    var num = parseInt(src_num);
    console.log(num);
    if (num == 4) {
      num = 0;
      $("#gallery-middle-image").attr("src", imgAr[num].src);
    }
    else if (num <= 4) {
      num++;
      $("#gallery-middle-image").attr("src", imgAr[num].src);
    }
    makeBorder(num);
  });
  
  // $("a").mouseover(function () {
  //   $(this).css("color", "#f7ae3f");
  // })
  // $("a").mouseout(function () {
  //   $(this).css("color", "black");
  // })
});



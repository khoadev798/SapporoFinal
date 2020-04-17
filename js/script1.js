var app = new Vue({
  el: ".container",
  data: {
    listImg: [

    ],
    listPromo: [

    ],
    currentIndex: 0,
    current: 0,
    speed: 3000,
    timer: null,
    errorMsg: false,
    successMsg: false,
    toggleCheck: false
  },
  mounted: function () {
    this.startRotation();
    this.getListImg();
  },
  methods: {
    async getListImg() {
      let res = await axios.get('http://demo.123vieclam.vn/api.php?action=read_slide')
      this.listImg = res.data.slides
      // console.log(this.listImg)
  },
    startRotation: function () {
      this.timer = setInterval(this.next, this.speed);
    },
    stopRotation: function () {
      clearTimeout(this.timer);
      this.timer = null;
    },
    next: function () {
      var current = this.current;
      var next = current + 1;

      if (next > this.listImg.length - 1) {
        next = 0;
      }
      this.current = next;
      this.setActive(this.current);


      // -------add active------
      // var bars = document.getElementsByClassName("bar");
      // console.log(bars.length)
      // for (i = 0; i < bars.length; i++) {
      //   bars[i].className = bars[i].className.replace(" active", "");
      // }
      // bars[this.current].className += " active";
    },
    // prev: function () {
    //   var current = this.current;
    //   var prev = current - 1;

    //   if (prev < 0) {
    //     prev = this.listImg.length -1;
    //   }

    //   this.current = prev;
    //   this.setActive(this.current);
    // },
    isActive: function (slide) {
      return this.current === slide;
    },
    setActive: function (slide) {
      this.current = slide;
    },
    currentSlide(n) {
      this.isActive(this.current = n);      
    },
  }
})











// -----------------------------VUEJS--------------------------------------------------
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
    // console.log(imgAr.length);
    // //Slider 1 change
    // $("#bar1").css("opacity", "1");   
    // function changeSlide(num){
    //   for(var s = 1; s < 4; s++){
    //       if(num==s){
    //         $("#bar"+num).css("opacity","1");
    //         var margin = (s-1)*(-20);
    //         $(".s1").css("margin-left",margin+"%");

    //       }
    //       else{
    //         $("#bar"+s).css("opacity","0.5");
    //       }
    //   }
    // }
    // var slide1Current = 1;
    // function runSlide(){
    //   if(slide1Current < 2){
    //     slide1Current++;
    //     changeSlide(slide1Current);
    //   }
    //   else{
    //     slide1Current = 1;
    //     changeSlide(slide1Current);
    //   }
    //   console.log(slide1Current);
    // }
    // var myVar1 = setInterval(runSlide,3000);
    

    // $("#bar1").click(function(){
    //   slide1Current = 1;
    //   changeSlide(slide1Current);
    //   // $(".s1").css("margin-left","0%");
    // });
    // $("#bar2").click(function(){
    //   slide1Current = 2; 
    //   changeSlide(slide1Current);
    //   // $(".s1").css("margin-left","-20%");
    // });
    // // $("#bar3").click(function(){
    // //   slide1Current = 3;
    // //   changeSlide(slide1Current);
    // //   // $(".s1").css("margin-left","-40%");
    // // });



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

    // if($(".hide-scrollbar2")[0]){
    //   $(".hidden-info").removeClass("hide-scrollbar2");
    //   $(".hidden-info").addClass("hide-scrollbar1");
    // }
    $("#show-info1").slideToggle("slow");
    $("#show-info1").css("background-color", "#e19a3e");
    $(".hidden-info").toggleClass('hide-scrollbar1');
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
    // if($(".hide-scrollbar1")[0]){
    //   $(".hidden-info").addClass("hide-scrollbar2");
    // }
    // else if($(".hide-scrollbar2")[0]){
    //   $(".hidden-info").removeClass("hide-scrollbar2");
    // }
      // $(".hidden-info").addClass("hide-scrollbar2");
    $("#show-info1").slideToggle("slow");
    $("#show-info1").css("background-color", "#353535");
    $(".hidden-info").toggleClass('hide-scrollbar2');
    $("#show-info1").html("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis dolor nisl. Ut consequat risus a turpis portitor, quis feugiat velit eleifend. Donec interdum elementum neque. Mauris interdum nibh vitae molestie commodo. Mauris parta felis sapien, vitae hendrerit arcu lacinia non. Sed sapien ipsum, ornare quis magna vitae, iaculis semper auge. Sed pulvinar odio in dictum euismod.</p><p>Morbi tincidunt sodales ipsum, nec porta magna tincidunt sit amet. Aenean porta justo ut molis imperdiet. Nunc varius velit quis nunc parta, quis.</p>");
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

  // $("#gallery-middle-icon").click(function () {
  //   if ($(this).attr("src") === "../images/ic_action_name.png") {
  //     console.log("true");
  //     $(this).attr("src", "../images/Picture1.png");
  //     $(".small-images-slider").height("15%");
  //     $(".last").css("bottom","-7.5%");
  //   }
  //   else {
  //     $(this).attr("src", "../images/ic_action_name.png");
  //     $(".small-images-slider").height("0%");
  //     $(".last").css("bottom","0%");

  //   }
  //   // $(".small-images-slider").slideToggle("slow");
  //   // $(".small-images-slider").css("visibility", "visible");
  // });

  // for(var k = 0; k < 5; k++){
  //       $("#small-slider"+k).css("border", "1px solid white");
  // }
  $("#small-slider1").css("border", "1px solid white");
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
  $(".thumbnail").click(function () {
    var src1 = $(this).attr('src');
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



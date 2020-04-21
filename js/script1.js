var app = new Vue({
  el: ".container",
  data: {
    listImg: [

    ],
    listPromo: [

    ],
    testLibrary:[
      
    ],
    listLibrary: [
      {
        id: 1,
        smalls: [
          { id: 10 },
          { id: 11 },
          { id: 12 },
          { id: 13 },
          { id: 14 },

        ],
        title:"SAPPORO SUMMER",
        time:"20.03.2020 - 29.03.2020"
      },
      {
        id: 2,
        smalls: [
          { id: 20 },
          { id: 21 },
          { id: 22 },
          { id: 23 },
          { id: 24 },

        ],
        title:"SAPPORO NIGHT",
        time:"21.03.2020 - 22.03.2020"
      },
      {
        id: 3,
        smalls: [
          { id: 30 },
          { id: 31 },
          { id: 32 },
          { id: 33 },
          { id: 34 },

        ],
        title:"THƯỞNG THỨC BIA CHUẨN VỊ",
        time:"23.03.2020 - 24.03.2020"
      },
      {
        id: 4,
        smalls: [
          { id: 30 },
          { id: 31 },
          { id: 32 },
          { id: 33 },
          { id: 34 },

        ],
        title:"SAPPORO MORNING",
        time:"22.03.2020 - 25.03.2020"
      },
    ],
    currentIndex: 0,
    current: 1,
    current1: 0,
    current2: 2,
    speed: 3000,
    timer: null,
    errorMsg: false,
    successMsg: false,
    toggleCheck: false
  },
  mounted: function () {
    // this.startRotation();
    this.getListImg();
    this.getList();
    

  },
  methods: {
    async getListImg() {
      let res = await axios.get('http://demo.123vieclam.vn/api.php?action=read_slide')
      this.listImg = res.data.slides
      // console.log(this.listImg)
  },
  async getList() {
    let res = await axios.get('http://localhost/CMS_Sapporo/api.php?action=read_library')
    this.testLibrary = res.data.librarys;

},
  isActive1: function (slide) {
    return this.current1 === slide;
  },
  setActive1: function (slide) {
    this.current1 = slide;
  },
  isActive2: function (slide) {
    return this.current2 === slide;
  },
  setActive2: function (slide) {
    this.current2 = slide;
  },
  next: function () {
    var current = this.current;
    var next = current + 1;

    if (next > this.listLibrary.length - 1) {
      next = 0;
    }
    this.current = next;
    this.setActive(this.current);


    var current1 = this.current1;
    var next1 = current1 + 1;

    if (next1 > this.listLibrary.length - 1) {
      next1 = 0;
    }
    this.current1 = next1;
    this.setActive1(this.current1);
    // ------------------------------------------
    var current2 = this.current2;
    var next2 = current2 + 1;

    if (next2 > this.listLibrary.length - 1) {
      next2 = 0;
    }
    this.current2 = next2;
    this.setActive2(this.current2);
    
  },
  prev: function () {
    var current = this.current;
    var prev = current - 1;

    if (prev < 0) {
      prev = this.listLibrary.length - 1;
    }

    this.current = prev;
    this.setActive(this.current);
    // ---------------------------------------
    var current1 = this.current1;
    var prev1 = current1 - 1;

    if (prev1 < 0) {
      prev1 = this.listLibrary.length - 1;
    }

    this.current1 = prev1;
    this.setActive1(this.current1);
    // -----------------------------------------------
    var current2 = this.current2;
    var prev2 = current2 - 1;

    if (prev2 < 0) {
      prev2 = this.listLibrary.length - 1;
    }

    this.current2 = prev2;
    this.setActive2(this.current2);
  },
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
  var hiddenInfo1ToShow = [];
  hiddenInfo1ToShow[0] = {bgColor:'#e19a3e', html:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis dolor nisl. Ut consequat risus a turpis portitor, quis feugiat velit eleifend. Donec interdum elementum neque. Mauris interdum nibh vitae molestie commodo. Mauris parta felis sapien, vitae hendrerit arcu lacinia non. Sed sapien ipsum, ornare quis magna vitae, iaculis semper auge. Sed pulvinar odio in dictum euismod.</p><p>Morbi tincidunt sodales ipsum, nec porta magna tincidunt sit amet. Aenean porta justo ut molis imperdiet. Nunc varius velit quis nunc parta, quis.</p>'};
  hiddenInfo1ToShow[1] = {bgColor:'#353535', html:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis dolor nisl. Ut consequat risus a turpis portitor, quis feugiat velit eleifend. Donec interdum elementum neque. Mauris interdum nibh vitae molestie commodo. Mauris parta felis sapien, vitae hendrerit arcu lacinia non. Sed sapien ipsum, ornare quis magna vitae, iaculis semper auge. Sed pulvinar odio in dictum euismod.</p><p>Morbi tincidunt sodales ipsum, nec porta magna tincidunt sit amet. Aenean porta justo ut molis imperdiet. Nunc varius velit quis nunc parta, quis.</p>'};
  function changeInsideOfHiddenInfo1(hiddenNum1){
    $("#show-info1").css("background-color", hiddenInfo1ToShow[hiddenNum1].bgColor);
    $("#show-info1").html(hiddenInfo1ToShow[hiddenNum1].html)
  }
  var flag1 = 0;
  var run1;
  $('#line1-icon1').hover(function(){
    if(flag1==0){
      run1 = onClickAndDisableOtherClick(1);
      }   
  });
  $('#line1-icon0').hover(function(){
    if(flag1==0){
      run1 = onClickAndDisableOtherClick(0);
    }
  });
  
  // $('#line1-icon1').hover(onClickAndDisableOtherClick(0));
  function onClickAndDisableOtherClick(element){
    for(var t = 0; t<2 ; t++){
      if(t==element){
        $('#line1-icon'+element).click( function(){
          flag1 = 1;
          if ($(this).attr("src") === "../images/ic_action_name.png") {
            console.log("true");
            // $(".line-responsive").css('margin-top', '0em');
            $(this).attr("src", "../images/Picture1.png");
            changeInsideOfHiddenInfo1(element);
            $("#show-info1").addClass('hide-scrollbar'+(element+1));
            $("#show-info1").stop(true).slideDown('slow');
          }
          else {
            $(this).attr("src", "../images/ic_action_name.png");
            // $(".line-responsive").css('margin-top', '0.5em');


            flag1 = 0;
            $("#show-info1").slideUp('slow');
            $("#show-info1").removeClass('hide-scrollbar'+(element+1));
          }
        });
      }
      else{
        $('#line1-icon'+t).unbind('click');
      }
    }
  }
  // $("#line1-icon0").click(function () {
  //   if ($(this).attr("src") === "../images/ic_action_name.png") {
  //     console.log("true");
  //     $(this).attr("src", "../images/Picture1.png");
  //   }
  //   else {
  //     $(this).attr("src", "../images/ic_action_name.png");
  //   }
  //   // if($(".hide-scrollbar2")[0]){
  //   //   $(".hidden-info").removeClass("hide-scrollbar2");
  //   //   $(".hidden-info").addClass("hide-scrollbar1");
  //   // }
  //   $("#show-info1").slideToggle("slow");
  //   $("#show-info1").css("background-color", "#e19a3e");
  //   $(".hidden-info").toggleClass('hide-scrollbar1');
  //   $("#show-info1").html("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis dolor nisl. Ut consequat risus a turpis portitor, quis feugiat velit eleifend. Donec interdum elementum neque. Mauris interdum nibh vitae molestie commodo. Mauris parta felis sapien, vitae hendrerit arcu lacinia non. Sed sapien ipsum, ornare quis magna vitae, iaculis semper auge. Sed pulvinar odio in dictum euismod.</p><p>Morbi tincidunt sodales ipsum, nec porta magna tincidunt sit amet. Aenean porta justo ut molis imperdiet. Nunc varius velit quis nunc parta, quis.</p>");
  // });
  // $("#line1-icon1").click(function () {
  //   if ($(this).attr("src") === "../images/ic_action_name.png") {
  //     console.log("true");
  //     $(this).attr("src", "../images/Picture1.png");
  //   }
  //   else {
  //     $(this).attr("src", "../images/ic_action_name.png");
  //   }
  //   // if($(".hide-scrollbar1")[0]){
  //   //   $(".hidden-info").addClass("hide-scrollbar2");
  //   // }
  //   // else if($(".hide-scrollbar2")[0]){
  //   //   $(".hidden-info").removeClass("hide-scrollbar2");
  //   // }
  //     // $(".hidden-info").addClass("hide-scrollbar2");
  //   $("#show-info1").slideToggle("slow");
  //   $("#show-info1").css("background-color", "#353535");
  //   $(".hidden-info").toggleClass('hide-scrollbar2');
  //   $("#show-info1").html("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis dolor nisl. Ut consequat risus a turpis portitor, quis feugiat velit eleifend. Donec interdum elementum neque. Mauris interdum nibh vitae molestie commodo. Mauris parta felis sapien, vitae hendrerit arcu lacinia non. Sed sapien ipsum, ornare quis magna vitae, iaculis semper auge. Sed pulvinar odio in dictum euismod.</p><p>Morbi tincidunt sodales ipsum, nec porta magna tincidunt sit amet. Aenean porta justo ut molis imperdiet. Nunc varius velit quis nunc parta, quis.</p>");
  // });
  var hiddenInfo1ToShow1 = [];
  hiddenInfo1ToShow1[0] = {bgColor:'#353535', html:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis dolor nisl. Ut consequat risus a turpis portitor, quis feugiat velit eleifend. Donec interdum elementum neque. Mauris interdum nibh vitae molestie commodo. Mauris parta felis sapien, vitae hendrerit arcu lacinia non. Sed sapien ipsum, ornare quis magna vitae, iaculis semper auge. Sed pulvinar odio in dictum euismod.</p><p>Morbi tincidunt sodales ipsum, nec porta magna tincidunt sit amet. Aenean porta justo ut molis imperdiet. Nunc varius velit quis nunc parta, quis.</p>'};
  hiddenInfo1ToShow1[1] = {bgColor:'#facd92', html:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis dolor nisl. Ut consequat risus a turpis portitor, quis feugiat velit eleifend. Donec interdum elementum neque. Mauris interdum nibh vitae molestie commodo. Mauris parta felis sapien, vitae hendrerit arcu lacinia non. Sed sapien ipsum, ornare quis magna vitae, iaculis semper auge. Sed pulvinar odio in dictum euismod.</p><p>Morbi tincidunt sodales ipsum, nec porta magna tincidunt sit amet. Aenean porta justo ut molis imperdiet. Nunc varius velit quis nunc parta, quis.</p>'};
  hiddenInfo1ToShow1[2] = {bgColor:'#c6c6c6', html:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis dolor nisl. Ut consequat risus a turpis portitor, quis feugiat velit eleifend. Donec interdum elementum neque. Mauris interdum nibh vitae molestie commodo. Mauris parta felis sapien, vitae hendrerit arcu lacinia non. Sed sapien ipsum, ornare quis magna vitae, iaculis semper auge. Sed pulvinar odio in dictum euismod.</p><p>Morbi tincidunt sodales ipsum, nec porta magna tincidunt sit amet. Aenean porta justo ut molis imperdiet. Nunc varius velit quis nunc parta, quis.</p>'};
  var flag2 = 0;
  var run2;
  function changeInsideOfHiddenInfo2(hiddenNum2){
    $("#show-info2").css("background-color", hiddenInfo1ToShow1[hiddenNum2].bgColor);
    $("#show-info2").html(hiddenInfo1ToShow1[hiddenNum2].html)
  }
  $('#line2-icon0').hover(function(){
    if(flag2==0){
      run2 = onClickAndDisableOtherClickLine2(0);
    }
  });
  $('#line2-icon1').hover(function(){
    if(flag2==0){
      run2 = onClickAndDisableOtherClickLine2(1);

    }   
  });
  $('#line2-icon2').hover(function(){
    if(flag2==0){
      run2 = onClickAndDisableOtherClickLine2(2);
      }   
  });
  function onClickAndDisableOtherClickLine2(element2){
    for(var t = 0; t<3 ; t++){
      if(t==element2){
        $('#line2-icon'+element2).click( function(){
          flag2 = 1;
          if ($(this).attr("src") === "../images/ic_action_name.png") {
            console.log("true");
            $(this).attr("src", "../images/Picture1.png");
            changeInsideOfHiddenInfo2(element2);
            $("#show-info2").addClass('hide-scrollbar'+(element2+3));
            $("#show-info2").stop(true).slideDown('slow');
          }
          else {
            $(this).attr("src", "../images/ic_action_name.png");
            flag2 = 0;
            $("#show-info2").slideUp('slow');
            $("#show-info2").removeClass('hide-scrollbar'+(element2+3));
          }
        });
      }
      else{
        $('#line2-icon'+t).unbind('click');
      }
    }
  }
  // $("#line2-left-icon").click(function () {
  //   if ($(this).attr("src") === "../images/ic_action_name.png") {
  //     console.log("true");
  //     $(this).attr("src", "../images/Picture1.png");
  //   }
  //   else {
  //     $(this).attr("src", "../images/ic_action_name.png");
  //   }
  //   $("#show-info2").slideToggle("slow");
  //   $("#show-info2").css("background-color", "#353535");
  //   $("#show-info2").html("Hinh 3");
  // });
  // $("#line2-middle-icon").click(function () {
  //   if ($(this).attr("src") === "../images/ic_action_name.png") {
  //     console.log("true");
  //     $(this).attr("src", "../images/Picture1.png");
  //   }
  //   else {
  //     $(this).attr("src", "../images/ic_action_name.png");
  //   }
  //   $("#show-info2").slideToggle("slow");
  //   $("#show-info2").css("background-color", "#facd92");
  //   $("#show-info2").html("Hinh 4");
  // });
  // $("#line2-right-icon").click(function () {
  //   if ($(this).attr("src") === "../images/ic_action_name.png") {
  //     console.log("true");
  //     $(this).attr("src", "../images/Picture1.png");
  //   }
  //   else {
  //     $(this).attr("src", "../images/ic_action_name.png");
  //   }
  //   $("#show-info2").slideToggle("slow");
  //   $("#show-info2").css("background-color", "#c6c6c6");
  //   $("#show-info2").html("Hinh 5");
  // });

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
  var allThumbnail = document.getElementsByClassName('thumbnail');
  var allThumbnailSrc=[];
  for(var m = 0; m<allThumbnail.length; m++){
    allThumbnailSrc[m] = allThumbnail[m].src;
    console.log(allThumbnailSrc[m]);
  }
  function makeBorder(src101) {
    for (var j = 0; j < allThumbnailSrc.length; j++) {
        var srcTranslator = "../../"+allThumbnailSrc[j].substring(allThumbnailSrc[j].indexOf('images1'));
        if(srcTranslator == src101){
            // allThumbnail[j].className += 'isBordered';
            console.log('way the go');
            allThumbnail[j].style.border="solid 1px white";
        }
        else{
          allThumbnail[j].style.border="none";
        }
    }
  }
  // makeBorder();
  function makeBorderFromMiddle(){
  var srcMiddle =  $(".middletest").attr('src');
  console.log(srcMiddle);
  makeBorder("../../"+srcMiddle.substring(srcMiddle.indexOf('images1')));}
  makeBorderFromMiddle();
  $('.run').click(function(){
    makeBorderFromMiddle();
  })
  $(".thumbnail").click(function () {
    var src1 = $(this).attr('src');
    // $(this).addClass('active101');
    // console.log(allThumbnailSrc.length);
    // console.log(allThumbnail.indexOf(this));
    
    $(".middletest").attr('src',src1);
    var src_num = src1.substring(src1.indexOf("big") + 3, src1.lastIndexOf(".jpg"));
    // console.log(src_num);
    // console.log(imgAr[parseInt(src_num)].src);
    // $("#gallery-middle-image").attr("src", imgAr[parseInt(src_num)].src);
    makeBorder(src1);
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
  });
  
  // $("a").mouseover(function () {
  //   $(this).css("color", "#f7ae3f");
  // })
  // $("a").mouseout(function () {
  //   $(this).css("color", "black");
  // })
});



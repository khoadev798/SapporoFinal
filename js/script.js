// $(document).ready(function(){
//     $(".toggle-button").click(function(){
//         $("ul").toggle();
//     })
// })

// function change(){
//     $("ul").toggle();
// }
$(document).ready(function(){
    const toggleButton = $('.toggle-button');
    const ul = document.getElementsByClassName('ul1')[0];
    toggleButton.click(function(){
        console.log("a");
        // $('.ul1').show();
        ul.classList.toggle('active1');
        // $('ul1').slideToggle();
    });
    var width = screen.width
    console.log(width);

    document.getElementById('myVideo').addEventListener('ended',myHandler,false);
    


    
    function myHandler(e){
        // var div = document.getElementById("after-video");
        // div.classList.remove("div-hide");
        
        $("#myVideo").css("display","none");
        $("#after-video").css("display","block");
        // div.innerHTML = "I'm showing";
    }
});

// toggleButton.addEventListener('click', () => {
//     console.log("a");
    
    
// })
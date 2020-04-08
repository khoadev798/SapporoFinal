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
        
        ul.classList.toggle('active');
    });
    var width = screen.width
    console.log(width);
    if(width>768){
    document.getElementById('myVideo').addEventListener('ended',myHandler,false);
    }

    
    function myHandler(e){
        var div = document.getElementById("after-video");
        div.classList.remove("div-hide");
        if(width>768){
        $("#myVideo").css("display","none");}
        // div.innerHTML = "I'm showing";
    }
});

// toggleButton.addEventListener('click', () => {
//     console.log("a");
    
    
// })
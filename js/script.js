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
    })
})

// toggleButton.addEventListener('click', () => {
//     console.log("a");
    
    
// })
$(document).ready(function() {
    isDocumentReady = true;
    $("body").css("overflow-y","hidden")
    $("#language-sel").addClass("fadeInLang");
});

$("#eng-lang").click(function(){
    $("#language-sel").fadeOut("slow",function(){
        $("body").css("overflow-y","visible");
        $(".hidden").addClass("fadeInLang");
    });    
})


const about = document.getElementById("anchor");
const test = document.getElementById("test");

$("#test").click(()=>{
    var about = document.getElementById("anchor");
    about.scrollIntoView();
})


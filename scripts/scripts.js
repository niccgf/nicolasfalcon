$(document).ready(function() {
    isDocumentReady = true;
    $("body").css("overflow-y","hidden")
    $("#language-sel").addClass("fadeInLang");
});

$("#eng-lang").click(function(){
    $("#language-sel").fadeOut("slow",function(){
        $("body").css("overflow-y","visible");
        $(".hidden-es").remove();
        $(".hidden-en").addClass("fadeInLang");
    });    
})

$("#esp-lang").click(function(){
    $("#language-sel").fadeOut("slow",function(){
        $("body").css("overflow-y","visible");
        $(".hidden-en").remove();
        $(".hidden-es").addClass("fadeInLang");
    })
})


const about = document.getElementById("anchor");
const test = document.getElementById("test");

$("#test").click(()=>{
    var about = document.getElementById("anchor");
    about.scrollIntoView();
})

$("#test-esp").click(()=>{
    var about = document.getElementById("anchor-es");
    about.scrollIntoView();
})


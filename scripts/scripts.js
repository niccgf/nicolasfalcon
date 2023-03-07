$(document).ready(function(){
    isDocumentReady = true;
});

const about = document.getElementById("anchor");
const test = document.getElementById("test");

$("#test").click(()=>{
    var about = document.getElementById("anchor");
    about.scrollIntoView();
})
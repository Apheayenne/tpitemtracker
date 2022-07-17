//sidebarOut = 0, sidebarIn = 1
var inOut = 1;

//DELETE - Only for Testing
function button_pressed(id){
    document.getElementById("textbox").innerHTML = id;
}

//To determine whether the sidebar is in or out and call the necessary function
// function sidebar(){
//     if(inOut == 0 ){
//         sidebarIn();
//     }else if (inOut == 1){
//         sidebarOut();
//     }
// }

//When the sidebar is out and needs to go in
function closesidebar(){
    document.getElementById("sidebar").style.width = "0px";
    // sliderChange();
    // document.getElementById(textawbox).innerHTML = "Going In";
    // button_pressed("Going In");

}

//When the sidebar is in, and needs to pull out
function opensidebar(){
    // document.getElementById("open").style.left = "260px";
    document.getElementById("sidebar").style.width = "300px";
    
    // sliderChange();
    // document.getElementById(textbox).innerHTML = "Going Out";
    // button_pressed("Going Out");
}

function sliderChange(){
    return Math.abs(inOut - 1);
}
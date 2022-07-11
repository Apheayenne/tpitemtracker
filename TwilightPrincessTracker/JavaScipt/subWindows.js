//DELETE - Only for Testing
function button_pressed(id){
    document.getElementById("textbox").innerHTML = id;
}

//To determine whether the sidebar is in or out and call the necessary function
function sidebar(){
    var buttonVal = document.getElementById("slideNav").value;
    console.log(buttonVal);
    if(buttonVal == "&#187" ){
        sidebarIn();
    }else sidebarOut();
}

//When the sidebar is out and needs to go in
function sidebarOut(){
    // document.getElementById(textawbox).innerHTML = "Going In";
    console.log("Going In");
}

//When the sidebar is in, and needs to pull out
function sidebarIn(){
    // document.getElementById(textbox).innerHTML = "Going Out";
    console.log("Going Out");
}
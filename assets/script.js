//Function for responsive navbar
function navBar(){
    let element = document.getElementById("res");
    let  button = document.getElementById("resButton");
    if (element.style.display === ""){
        element.style.display = "block";
        button.innerHTML = "close";
    }else{
        element.style.display = "";
        button.innerHTML = "menu";
    }
}

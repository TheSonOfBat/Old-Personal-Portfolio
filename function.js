contrastOn = false;
contrastToggleLock = false;

function slide(isOpen){
    const sliderMenu = document.getElementById("slider");
    (isOpen)?(sliderMenu.style.left = "100%"):(sliderMenu.style.left = "0");

}

function contrastToggle(){
    const headings = document.getElementsByClassName("depth");
    console.log(headings);
    const popup = document.getElementById("contrast-popup");
    popup.style.display = "block";
    popup.style.opacity = "1";

    for (x=0; x<headings.length; x++){
        (contrastOn)?(headings[x].style.color = "transparent", popup.innerText = "High Contrast Off"):(headings[x].style.color = "#404040", popup.innerText = "High Contrast On");
    }
    contrastOn = !contrastOn;
    popup.style.display = "block";
    if (!contrastToggleLock){
        contrastToggleLock = !contrastToggleLock;
        setTimeout(()=>{popup.style.opacity = "0";},2000);
        setTimeout(()=>{popup.style.display = "none", contrastToggleLock = !contrastToggleLock;},3000);
    }
}
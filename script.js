function openLoginPopup() {
    closeRegPopup();
    document.getElementById("loginPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
function openRegPopup(){
    closeLoginPopup();
    document.getElementById("regPopup").style.display="block";
    document.getElementById("overlay").style.display = "block";
}
function closeRegPopup(){
    document.getElementById("regPopup").style.display="none";
    document.getElementById("overlay").style.display = "none";
}
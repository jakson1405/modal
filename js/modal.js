var modal = document.getElementById('mymodal');
var btn = document.getElementById('btn_modal');
var close = document.getElementsByClassName('close_modal')[0];
btn.onclick = function(){
    modal.style.display = "block";
}
close.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event) {
    if(event.target == modal){
        this.modal.style.display = "none";
    }
}

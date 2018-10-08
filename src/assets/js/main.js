var el = document.getElementsByClassName('header__menu-item');
for(var i=0; i<el.length; i++) {
    el[i].addEventListener('mousseenter', shovSub, false);
    el[i].addEventListener('mousseleave', hideSub, false);

}
function shovSub() {
    if(this.children.length>1) {
        htis.children[1].style.height ="auto";
        htis.children[1].style.opasity ="1";
        htis.children[1].style.overflow ="visible";
    } else {
        return false;
    }
}
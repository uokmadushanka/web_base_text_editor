function color(value=null) {
    if(value){
        document.execCommand("foreColor", false, value);
    } else {
        document.execCommand("foreColor");
    }
}
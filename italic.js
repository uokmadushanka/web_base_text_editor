function italic(value=null) {
    if(value){
        document.execCommand("italic", false, value);
    } else {
        document.execCommand("italic");
    }
}
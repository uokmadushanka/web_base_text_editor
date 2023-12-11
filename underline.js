function underline(value=null) {
    if(value){
        document.execCommand("underline", false, value);
    } else {
        document.execCommand("underline");
    }
}
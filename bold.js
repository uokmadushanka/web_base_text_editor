function boldText(value=null) {
    if(value){
        document.execCommand("bold", false, value);
    } else {
        document.execCommand("bold");
    }
}
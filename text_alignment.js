function left(value=null) {
    if(value){
        document.execCommand("justifyLeft", false, value);
    } else {
        document.execCommand("justifyLeft");
    }
}

function right(value=null) {
    if(value){
        document.execCommand("justifyRight", false, value);
    } else {
        document.execCommand("justifyRight");
    }
}

function center(value=null) {
    if(value){
        document.execCommand("justifyCenter", false, value);
    } else {
        document.execCommand("justifyCenter");
    }
}

function justify(value=null) {
    if(value){
        document.execCommand("justifyFull", false, value);
    } else {
        document.execCommand("justifyFull");
    }
}
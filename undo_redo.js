function undo(value=null) {
    if(value){
        document.execCommand("undo", false, value);
    } else {
        document.execCommand("undo");
    }
}

function redo(value=null) {
    if(value){
        document.execCommand("redo", false, value);
    } else {
        document.execCommand("redo");
    }
}
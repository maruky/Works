 function addClass(obj, classname) {
    if (hasClass(obj, classname)) {
        return;
    }
    if (obj.className == '') {
        obj.className = classname;
    } else {
        obj.className += ' ' + classname;
    }
}

function removeClass(obj, classname) {
    if (!hasClass(obj, classname)) {
        return;
    }
    var classes = obj.className.split(' ');
    for (var i=0; i<classes.length; i++) {
        if (classes[i] == classname) {
            classes.splice(i, 1);
            i--;
        }
    }
    obj.className = classes.join(' ');
}

    
function hasClass(obj, classname) {
    var classes = obj.className.split(' ');
    for (var j=0; j<classes.length; j++) {
        if (classes[j] == classname) {
            return true;
        }
    }
    return false;
}

function className(obj, class_name){
    var arr = obj.getElementsByTagName('*');
    for(var i=0; i<arr.length; i++){
        var arr2 = arr[i].className.split(' ');
        for(var j=0; j<arr2.length; j++){
            if(arr2[j] == class_name)
                return arr[i];
        }
    }
    return null;

}
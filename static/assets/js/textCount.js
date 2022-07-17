function countChar(val) {
    var len = val.value.length;
    if (len > 500) {
        val.value = val.value.substring(0, 500);
    } else {
        $('#charNum').text(500 - len);
    }
};

function countCommentChar(val) {
    var len = val.value.length;
    if (len > 200) {
        val.value = val.value.substring(0, 200);
    } else {
        $('#commentNum').text(200 - len);
    }
};
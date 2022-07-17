function pancard() {
element = document.getElementById('pancard').style;
element.removeProperty('display');
}
function aadharcard() {
element = document.getElementById('aadharcard').style;
element.removeProperty('display');
}
function cancelcheque() {
element = document.getElementById('cancelcheque').style;
element.removeProperty('display');
}
function photo() {
element = document.getElementById('photo').style;
element.removeProperty('display');
}

function clicked(item) {
show = ($(item).attr("id"));
if (show == "view_pan"){
    document.getElementById("pan").style.display = "block";
    document.getElementById("aadhar").style.display = "none";
    document.getElementById("cheque").style.display = "none";
    document.getElementById("photos").style.display = "none";
    }
    else if (show == "view_aadhar"){
        document.getElementById("pan").style.display = "none";
        document.getElementById("aadhar").style.display = "block";
        document.getElementById("cheque").style.display = "none";
        document.getElementById("photos").style.display = "none";
    }
    else if (show == "view_cheque"){
        document.getElementById("pan").style.display = "none";
        document.getElementById("cheque").style.display = "block";
        document.getElementById("aadhar").style.display = "none";
        document.getElementById("photos").style.display = "none";
    }
    else{
        document.getElementById("pan").style.display = "none";
        document.getElementById("photos").style.display = "block";
        document.getElementById("aadhar").style.display = "none";
        document.getElementById("cheque").style.display = "none";
    }
}
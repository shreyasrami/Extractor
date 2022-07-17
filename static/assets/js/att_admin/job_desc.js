$(".desc").focus(function() {
    if (document.getElementById('desc').value === '') {
        document.getElementById('desc').value += '• ';
        }
    });
            
$(".desc").keyup(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        document.getElementById('desc').value += '• ';
    }
    var txtval = document.getElementById('desc').value;
        if (txtval.substr(txtval.length - 1) == '\n') {
            document.getElementById('desc').value = txtval.substring(0, txtval.length - 1);
        }
});
        
$(".prof").focus(function() {
    if (document.getElementById('prof').value === '') {
        document.getElementById('prof').value += '• ';
    }
});
            
$(".prof").keyup(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            document.getElementById('prof').value += '• ';
        }
        var txtval = document.getElementById('prof').value;
            if (txtval.substr(txtval.length - 1) == '\n') {
                document.getElementById('prof').value = txtval.substring(0, txtval.length - 1);
            }
});

function jd() {
    element = document.getElementById('jd').style;
    element.removeProperty('display');
}

$(document).ready(function() {
    var loyear = document.getElementById("loyear").value;
    $(".lyear").val(loyear);
    var lomonth = document.getElementById("lomonth").value;
    $(".lmonth").val(lomonth);
    var hiyear = document.getElementById("hiyear").value;
    $(".hyear").val(hiyear);
    var himonth = document.getElementById("himonth").value;
    $(".hmonth").val(himonth);

    var lolakh = document.getElementById("lolakh").value;
    $(".llakh").val(lolakh);
    var lothousand = document.getElementById("lothousand").value;
    $(".lthousand").val(lothousand);
    var hilakh = document.getElementById("hilakh").value;
    $(".hlakh").val(hilakh);
    var hithousand = document.getElementById("hithousand").value;
    $(".hthousand").val(hithousand);
});
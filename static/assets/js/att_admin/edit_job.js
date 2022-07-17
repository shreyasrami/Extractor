$(window).on('load', function() {
           $('#location').selectpicker();
           var fetchLoc = document.getElementById("inpLoc").value;
           loc = fetchLoc.split(",");
           $('#location').selectpicker('val', loc);
           $('#location').selectpicker('refresh');
           document.getElementsByClassName("btn dropdown-toggle btn-default")[0].style.borderColor = "#d9d9d9";
           document.getElementsByClassName("btn dropdown-toggle btn-default")[0].style.height = "34px";
           document.getElementsByClassName("btn dropdown-toggle btn-default")[0].style.background = "#ffffff";
        })
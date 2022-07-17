var leavenumber = function(){

            if(document.getElementById("date1").valueAsDate!= "" && document.getElementById("date2").valueAsDate!= "" && document.getElementById("session1").value != "" &&document.getElementById("session2").value != ""){
                const date1 = document.getElementById("date1").valueAsDate;
                const date2 = document.getElementById("date2").valueAsDate;
                const diffTime = Math.abs(date2 - date1);
                var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))+1;

                session1 = document.getElementById("session1").value;
                session2 = document.getElementById("session2").value;

                if (session1 == "Session 1" && session2 == "Session 1"){
                    diffDays=diffDays-0.5;
                }
                else if (session1 == "Session 1" && session2 == "Session 2"){
                    diffDays=diffDays;
                }
                else if (session1 == "Session 2" && session2 == "Session 1"){
                    diffDays=diffDays-1;
                }
                else{
                    diffDays=diffDays-0.5;
                }
                document.getElementById("leave").value=diffDays
            }
        }
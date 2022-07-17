var check = function() {
        if ((document.getElementById('password').value).length < 8){
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = '*Password must contain atleast 8 characters.';
            document.getElementById('update').disabled=true;
        }
        else{
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerHTML = '*Password Validated.';
            document.getElementById('update').disabled=false;
            }
        }
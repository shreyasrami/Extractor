var check = function() {
    if (document.getElementById('pass').value!="" && document.getElementById('conf_password').value!=""){
        if (document.getElementById('pass').value==document.getElementById('conf_password').value) {
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerHTML = '*Passwords match.';

            if ((document.getElementById('pass').value).length < 8 || (document.getElementById('conf_password').value).length < 8){
                document.getElementById('message').style.color = 'red';
                document.getElementById('message').innerHTML = '*Password must contain atleast 8 characters.';
                document.getElementById('update').disabled=true;
            }
            else{
                document.getElementById('message').style.color = 'green';
                document.getElementById('message').innerHTML = '*Passwords Validated.';
                document.getElementById('update').disabled=false;
            }
        }
        else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = '*Passwords donot match.';
            document.getElementById('update').disabled=true;
        }
    }
}
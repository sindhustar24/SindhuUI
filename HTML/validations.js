/**
 * Created by Innovapath on 3/11/2016.
 */
function validate() {
    // alert("check");

    try {
        var name = document.getElementById("Name").value;
        var password = document.getElementById("pwd").value;
        var email = document.getElementById("Email").value;
        var mobile = document.getElementById("mobile").value;
        var message = document.getElementById("msg").value;
        var male = document.getElementById("genderm").checked;
        var female = document.getElementById("genderf").checked;
        var carrom = document.getElementById("carrom").checked;
        var cricket = document.getElementById("cricket").checked;
        var state = document.getElementById("state").value;
        var namepattern = /^[a-z]+$/;
        var emailpattern = /^[a=z]+[1-zA-Z0-9\.\_]+@+[a-z]+ [.]+[a-z]+$/;
        var passwordpattern = /^[a-zA-Z0-9]+[$\@;]/;
        var mobilepattern = / ^[0-9]+$/;


        if (name.length === 0) {
            alert("please enter name");
            document.getElementById("Name").focus();
            return false;
        }
        if (!name.match(namepattern)) {
            alert("please enter correct name format");
            document.getElementById("Name").focus();
            return false;
        }


        if (email.length == 0) {
            alert("please enter email");
            document.getElementById("email").focus();
            return false;
        }

        if (!email.match(emailpattern)) {
            alert("please enter email");
            document.getElementById("email").focus();
            return false;
        }
        if (mobile.Length != 10) {
            alert("please enter mobile no");
            document.getElementById("mobile").focus();
            return false;

        }
        if (mobile.match(mobilepattern)) {
            alert("please enter mobile no");
            document.getElementById("mobile").focus();
            return false;

        }
        if (password.length == 0) {
            alert("please enter password");
            document.getElementById("pwd").focus();
            return false;
        }

        if (password.match(passwordpattern)) {
            alert("please enter password must end with @ or $");
            document.getElementById("pwd").focus();
            return false;
        }
        if (message.length == 0) {
            alert("please enter message");
            document.getElementById("msg").focus();
            return false;
        }
        if (male == false && female == false) {
            alert("please select any gender");
            document.getElementById("genderm").focus();
            return false;
        }
        if (cricket == false && carrom == false) {
            alert("please select atleast one hobby");
            document.getElementById("cricket").focus();
            return false;

        }
        if (state == 'Select state') {
            alert("please select any state");
            document.getElementById("state").focus();
            return false;

        }

    }

    catch (e) {
        alert(e.message);

    }
}
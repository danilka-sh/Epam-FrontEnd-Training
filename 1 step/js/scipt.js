function control_container() // проверка данных регистрации

{
    user = [];
    var goin = true;
    var name = document.getElementById("in1");
    var email = document.getElementById("in2");
    var password = document.getElementById("in3");

    // имя

    if (name.value.search(/\d/) != -1 || name.value.replace(/\s/g, '') == "") {

        name.style.border = "1px solid red";

        user.push(false);

    } else {

        user.push(name.value);

        name.style.border = null;

    }


    // эл почта

    const mailPattern = /^[0-9a-z_-]+\@[0-9a-z_-]+\.[a-z]{2,4}$/i;

    if (!mailPattern.test(email.value.trim())) {

        email.style.border = "1px solid red";

        user.push(false);

    } else {

        user.push(email.value);

        email.style.border = null;

    }

    // пароль

    let str = password.value;

    if (password.value.replace(/\s/g, '') == "" || str.length < 4)

    {

        password.style.border = "1px solid red";

        user.push(false);

    } else

        password.style.border = null;

    user.push(password.value);


}

function sendJSON(); {
    let name = document.getElementById('name');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    let result = document.getElementById('result');
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/postdata.php?";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readystate === 4 && xhr.status === 200) {
            result.innerHTML = this.responseText;
        }
    }
    var data = JSON.stringify({ "name": name.value, "password": password.value, "email": email.value });
    xhr.send(data);
}
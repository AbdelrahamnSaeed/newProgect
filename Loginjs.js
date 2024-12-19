function validateForm(e) {
    e.preventDefault()
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const ul = document.getElementById("errorList");
//    console.log(username == "");
   
    if (username == "") {
        alert("Please enter a username.\n");
        // list1 = document.createElement("li");
        // list1.innerHTML = "<p style='color: red'> Please enter a username </p>"
        // ul.appendChild(list1);
        return  false;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.\n");
        //  list2 = document.createElement("li");
        // list2.innerHTML = "<p style='color: red'> Please enter a valid email address </p>"
        // ul.appendChild(list2);
        return  false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.\n");
        //  list3 = document.createElement("li");
        // list3.innerHTML = "<p style='color: red'> Password must be at least 6 characters long </p>"
        // ul.appendChild(list3);
        return  false;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match.\n");
        // list4 = document.createElement("li");
        // list4.innerHTML = "<p style='color: red'> Passwords do not match </p>"
        // ul.appendChild(list4);
        return  false;
    }

    window.localStorage.setItem("username",username);
    
    window.location.href="Home.html"
    
}



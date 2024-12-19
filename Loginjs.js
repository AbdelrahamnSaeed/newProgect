function validateForm(e) {
    e.preventDefault()
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const ul = document.createElement("ul");
//    console.log(username == "");
   
    if (username == "") {
        alert("Please enter a username.\n");
        // const list = document.createElement("li");
        // list.innerHTML = "<p style='color: red'> Please enter a username </p>"
        return  false;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.\n");
        // const list = document.createElement("li");
        // list.innerHTML = "<p style='color: red'> Please enter a valid email address </p>"
        return  false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.\n");
        // const list = document.createElement("li");
        // list.innerHTML = "<p style='color: red'> Password must be at least 6 characters long </p>"
        return  false;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match.\n");
        // const list = document.createElement("li");
        // list.innerHTML = "<p style='color: red'> Passwords do not match </p>"
        return  false;
    }

    window.localStorage.setItem("username",username);
    
    window.location.href="Home.html"
    
}



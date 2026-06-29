
function register() {
    let name = document.getElementById("username").value;
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;

    
    if (name === "" || number === "" || password === "") {
        alert("Please fill all fields");
       
    }

    // store in localStorage
    localStorage.setItem("username", name);
    localStorage.setItem("number", number);
    localStorage.setItem("password", password);

    alert("Registration Successful!");
}
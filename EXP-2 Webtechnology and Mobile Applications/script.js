function validateform() {
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let password=document.getElementById("password").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mobile").value;
    let address=document.getElementById("address").value;

    let namepattern=/^[a-zA-Z]+$/;
    let emailpattern=/^[a-zA-Z0-9.+-_%]+@[a-zA-Z0-9-.]+\.[a-z]{2,}$/;
    let mobilepattern=/^[0-9]{10}$/;

    if (!namepattern.test(fname) || fname.length < 6) {
        alert("First Name must contain only alphabets and at least 6 characters long");
        return false;
    }

    if(!emailpattern.test(email)) {
        alert("Please Enter a valid E-Mail ID");
        return false;
    }

    if(!mobilepattern.test(mobile)) {
        alert("Mobile Number must contain exactly 10 digits");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }
    
    if(lname===""){
        alert("Last Name cannot be empty");
        return false;
    }

    if (address===""){
        alert("Address cannot be empty");
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}  


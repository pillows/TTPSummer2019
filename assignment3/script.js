document.getElementById("submit").addEventListener("click", function(){
    passwordCheck();
});

const passwordCheck = () => {
    let password = document.getElementById("password").value;
    if(password === "12345678"){
        document.getElementById("message").innerHTML = "Correct"
    }
    else {
        alert("Wrong password")
    }
    console.log(password)
}

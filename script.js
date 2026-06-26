const form =
document.getElementById("contactForm");


form.addEventListener("submit",(e)=>{


e.preventDefault();



let data={


name:
document.getElementById("name").value,


email:
document.getElementById("email").value,


message:
document.getElementById("message").value


};




fetch("http://localhost:8080/api/contact",{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify(data)


})


.then(res=>res.json())


.then(()=>{


alert("Message Sent Successfully");


form.reset();


})


.catch(()=>{


alert("Backend not connected");


});


});
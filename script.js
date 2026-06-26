// CONTACT FORM


const form = document.getElementById("contactForm");



form.addEventListener("submit", function(e){


e.preventDefault();



let contactData = {


name: document.getElementById("name").value,


email: document.getElementById("email").value,


message: document.getElementById("message").value


};





fetch("http://localhost:8080/api/contact",
{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify(contactData)


})



.then(response=>{


if(response.ok){


return response.json();


}


else{


throw new Error("Failed");


}


})



.then(data=>{


alert("✅ Message Sent Successfully!");


form.reset();



})



.catch(error=>{


console.log(error);


alert("❌ Backend Server Not Connected");


});



});
// rescue

// =============================
// RESCUE LOCATION FEATURE
// =============================


let locationBtn = document.getElementById("locationBtn");


let currentLocation = "";



if(locationBtn){


locationBtn.addEventListener("click", function(){


    let result = document.createElement("p");


    result.id = "locationResult";


    locationBtn.after(result);



    if(navigator.geolocation){


        result.innerHTML =
        "Getting your location... 📍";



        navigator.geolocation.getCurrentPosition(

        function(position){


            let latitude =
            position.coords.latitude;


            let longitude =
            position.coords.longitude;



            let mapLink =
            `https://www.google.com/maps?q=${latitude},${longitude}`;



            currentLocation = mapLink;




            result.innerHTML = `

            Location Found Successfully 🐾

            <br><br>

            Latitude:
            ${latitude}

            <br>

            Longitude:
            ${longitude}

            <br><br>


            <a href="${mapLink}" target="_blank">

            Open Location In Google Maps

            </a>

            `;




            localStorage.setItem(

            "rescueLocation",

            JSON.stringify({

                latitude:latitude,

                longitude:longitude,

                map:mapLink

            })

            );



        },

        function(){


            result.innerHTML =
            "Please allow location permission";


        }


        );



    }

    else{


        result.innerHTML =
        "Location is not supported";


    }




});



}







// =============================
// RESCUE FORM
// =============================


let rescueForm =
document.querySelector(".report-section form");





if(rescueForm){


rescueForm.addEventListener(
"submit",
function(e){


e.preventDefault();



let rescueRequests =

JSON.parse(
localStorage.getItem("rescueRequests")
)

|| [];







let inputs =
rescueForm.querySelectorAll("input");



let animalType =
rescueForm.querySelector("select").value;



let description =
rescueForm.querySelector("textarea").value;





let request = {


name: inputs[0].value,


location:
inputs[1].value,


animal:
animalType,


description:description,


sharedLocation:
currentLocation,


time:
new Date().toLocaleString()



};






rescueRequests.push(request);






localStorage.setItem(

"rescueRequests",

JSON.stringify(rescueRequests)

);







alert(
"Rescue request submitted 🐾\nOur team will reach you soon!"
);






rescueForm.reset();



}

);


}




// ==========================
// Animal Data
// ==========================


let animals = [


{
name:"Bruno",
type:"dog",
age:"2 Years",
image:"assets/dog1.jpeg"
},


{
name:"Rocky",
type:"dog",
age:"1 Year",
image:"assets/dog2.jpeg"
},


{
name:"Max",
type:"dog",
age:"3 Years",
image:"assets/dog3.jpeg"
},


{
name:"Charlie",
type:"dog",
age:"8 Months",
image:"assets/dog4.jpeg"
},


{
name:"Buddy",
type:"dog",
age:"4 Years",
image:"assets/dog5.jpeg"
},



{
name:"Milo",
type:"cat",
age:"8 Months",
image:"assets/cat1.jpeg"
},


{
name:"Luna",
type:"cat",
age:"1 Year",
image:"assets/cat2.jpeg"
},


{
name:"Simba",
type:"cat",
age:"2 Years",
image:"assets/cat3.jpeg"
},


{
name:"Leo",
type:"cat",
age:"6 Months",
image:"assets/cat4.jpeg"
},


{
name:"Kitty",
type:"cat",
age:"3 Years",
image:"assets/cat5.jpeg"
}

];




// ==========================
// Animal data display (website source only)
// ==========================

const savedAnimals = animals;





// ==========================
// Display Animals
// ==========================


let container =
document.getElementById("animalContainer");




function displayAnimals(list){


container.innerHTML="";



list.map(animal=>{


container.innerHTML += `



<div class="animal-card">


<img src="${animal.image}">


<h2>
${animal.name}
</h2>


<p>

Type : ${animal.type}

<br>

Age : ${animal.age}

</p>



<button onclick="adopt('${animal.name}')">

Adopt Me ❤️

</button>



</div>


`;



});


}





// ==========================
// Filter Animals
// ==========================


function showAnimals(type){


if(type=="all"){


displayAnimals(savedAnimals);


}

else{


let filtered =
savedAnimals.filter(animal=>{

return animal.type == type;


});


displayAnimals(filtered);


}


}







// ==========================
// Adopt Function
// ==========================


function adopt(name){



let adoptedAnimals =
JSON.parse(
localStorage.getItem("adopted")
)
||
[];





let selectedAnimal =
savedAnimals.find(animal=>{


return animal.name == name;


});





adoptedAnimals.push(selectedAnimal);





localStorage.setItem(
"adopted",
JSON.stringify(adoptedAnimals)
);




alert(

name+
" adoption request saved 🐾"

);



}






// Initial Load

displayAnimals(savedAnimals);





// VOLUNTEER FORM


let volunteerForm =
document.getElementById("volunteerForm");



if(volunteerForm){


volunteerForm.addEventListener(
"submit",
function(e){


e.preventDefault();



let volunteers =
JSON.parse(
localStorage.getItem("volunteers")
)
|| [];




let volunteer = {


name:
document.getElementById("vname").value,


email:
document.getElementById("vemail").value,


phone:
document.getElementById("vphone").value,


role:
document.getElementById("vrole").value


};





volunteers.push(volunteer);



localStorage.setItem(
"volunteers",
JSON.stringify(volunteers)
);



alert(
"Thank you for joining Pawsitive Impact 🐾"
);



volunteerForm.reset();



}

);


}





// CONTACT FORM


let contactForm =
document.getElementById("contactForm");



if(contactForm){


contactForm.addEventListener(
"submit",
function(e){


e.preventDefault();



let messages =
JSON.parse(
localStorage.getItem("messages")
)
|| [];




let message = {


name:
document.getElementById("cname").value,


email:
document.getElementById("cemail").value,


subject:
document.getElementById("subject").value,


message:
document.getElementById("message").value


};





messages.push(message);





localStorage.setItem(
"messages",
JSON.stringify(messages)
);




alert(
"Message sent successfully 🐾"
);



contactForm.reset();



}

);


}
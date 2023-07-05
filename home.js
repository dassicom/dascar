let nav = document.querySelector("nav");

//select the open element
let open = document.querySelector("#menuIcon");

//select the close element
let close = document.querySelector("#timeIcon")
//Open button
open.addEventListener("click", function(){
    nav.style.left = "0.1px"
})

//Close button
close.addEventListener("click",function(){
    nav.style.left ="-850px"
})

//select audi car
let price = document.querySelector(".price")
let audix = document.querySelector(".audix")
//select car image
let carMove = document.querySelector(".carMove")
//select car model
let model = document.querySelector(".model")
// select the car mark
let markis = document.querySelector(".markis")
//select the year of the car production
let year = document.querySelector(".year")
//select car transmission
let trans = document.querySelector(".trans")
//select the car type of fuel
let fuel = document.querySelector(".fuel")
//select car color
let color = document.querySelector(".color")


//Audi function

function audiCar(){
    price.innerHTML = "$500"
    carMove.src = "audiS.jpg"
    model.innerHTML ="Audi"
    markis.innerHTML ="MB-R3"
    year.innerHTML = "2017"
    trans.innerHTML ="Manual"
    fuel.innerHTML = "Gas"
    color.innerHTML ="Ligthgray"
}

//Audi function
function toyotaCar(){
  price.innerHTML = "$300"
    carMove.src = "toyota.jpg"
    model.innerHTML ="Toyota"
    markis.innerHTML ="MRV-56"
    year.innerHTML = "2012"
    trans.innerHTML ="Manual"
    fuel.innerHTML = "Gas"
    color.innerHTML ="Ligthgray"
}

//Mercedez Benz
function mercedezBenz(){
  price.innerHTML = "$250"
    carMove.src = "mercedezBenz.jpg"
    model.innerHTML ="Mercedez Benz"
    markis.innerHTML ="BMZ-T5"
    year.innerHTML = "2019"
    trans.innerHTML ="Automatic"
    fuel.innerHTML = "Gasoline"
    color.innerHTML ="grey"
}

//Gof car

function golfCar(){ 
  price.innerHTML = "$350"
    carMove.src = "golf.jpg"
    model.innerHTML ="Golf"
    markis.innerHTML ="GOLF-T5X"
    year.innerHTML = "2000"
    trans.innerHTML ="Manual"
    fuel.innerHTML = "Gas"
    color.innerHTML ="gray"
}

//Jeep car

function jeepCar(){
  price.innerHTML = "$450"
    carMove.src = "jeep.jpg"
    model.innerHTML ="Jeep"
    markis.innerHTML ="JEEP-UR"
    year.innerHTML = "2010"
    trans.innerHTML ="Automatic"
    fuel.innerHTML = "Super"
    color.innerHTML ="lightgray"
}

//Honda car
function hondaCar(){
    price.innerHTML = "$650"
    carMove.src = "car17.png"
    model.innerHTML ="Honda"
    markis.innerHTML ="Honda-UxR"
    year.innerHTML = "2022"
    trans.innerHTML ="Automatic"
    fuel.innerHTML = "Gas"
    color.innerHTML ="red"
}

//Displaying booking
//search function
function searchFunc(){

let selectCar = document.querySelector("#selectCar").value
let pickLocation = document.querySelector("#pickLocation").value
let dropLocation = document.querySelector("#dropLocation").value
let pickUpDate = document.querySelector("#pickUpDate").value
let dropUpDate = document.querySelector("#dropUpDate").value
let bookingContainer = document.querySelector(".display-booking")


   bookingContainer.innerHTML = `
   <div class="head-container-booking">
    <div class="page1">
        <div class="data1">
          <h2>Complete reservation</h2>
           <h3 class="titleBooking">Upon completing this reservation enquiry,you will receive:</h3>
             <p>A confirmation message through your email address for a successful reservation</p>
               </div>
                <div class="data2">
                 <h2 class="display1">Car selected :<span class="selectColor"> ${selectCar}</span></h2>
                   <h3>Location & Date</h3>
                    </div>
                     <div class="main-location">
                      <div class="data">
                       <h4>Pick up location</h4>
                        <p>${pickLocation}</P>
                        </div>
                     <div class="data">
                    <h4>Drop up location</h4>
                   <p>${dropLocation}</P>
                  </div>
                <div class="data">
                <h4>Pick-up Date & Time</h4>
              <p>${pickUpDate}</P>
              <input type="time"/ id="time">
            </div>
            <div class="data">
           <h4>Drop-up Date & Time</h4>
          <p>${dropUpDate}</P>
        <input type="time"/ id="time">
     </div>
     </div>
        <br>
          <h2 class="personalForm">Personal Information</h2>
           <div class="form-wrapper">
           <form class="formContainer">
            <label for="name">Name</label>
             <input type="text"  id="name" required placeholder="Enter your name">
              <label for="Surname">Surname</label>
              <input type="text"  id="surname" required  placeholder="Enter your surname">
              <label for="email">Email</label>
               <input type="email"  id="email" required placeholder="Enter your email">
             <input type="submit" value="Reserve now" id="submit">
        </form>
        <img src="timeIcon.png" class="icon" onclick="closeFunc()"/>
      </div>
`

}

function closeFunc(){

document.querySelector(".head-container-booking").remove()


}

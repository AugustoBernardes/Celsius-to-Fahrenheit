let input = document.getElementById("inputCelsius")

console.log(input)

html = document.getElementById("result")


function calculateCelsius(){
    let valueCelsius = parseFloat(input.value)

    console.log(valueCelsius)
    if (isNaN(valueCelsius)){
        alert("Type a temperature!")
        
    }
    else{
        let calculate = (valueCelsius * 9/5) + 32 
        
        console.log(calculate)
      checkTemperature(calculate)
     
    }
   
}


function checkTemperature(valueFahrenheit){
      // Temeprature Low
      if (valueFahrenheit <= 95){
         html.innerHTML = `
      <div class="image">
         <img src="./assets/neve.svg">
      </div>
      <p>Your temperature is ${valueFahrenheit.toFixed(1)} Fahrenheit, your temperature is low!</p>
     `
     }
     // Temeprature High
     if(valueFahrenheit >= 99.5){
         html.innerHTML = `
      <div class="image">
         <img src="./assets/fogo.svg">
      </div>
      <p>Your temperature is ${valueFahrenheit.toFixed(1)} Fahrenheit, your temperature is high!</p>
     `
     }
     // Temeprature Normal
     if (valueFahrenheit > 95 && valueFahrenheit < 99.5){
         html.innerHTML = `
         <div class="image">
            <img src="./assets/normal.svg">
         </div>
         <p>Your temperature is ${valueFahrenheit.toFixed(1)} Fahrenheit, your temperature is normal!</p>
        `
     }
     // Temeprature Normal
     if (valueFahrenheit <= 50 || valueFahrenheit >= 107.6 ){
         html.innerHTML = `
         <div class="image">
            <img src="./assets/dead.svg">
         </div>
         <p>Your temperature is ${valueFahrenheit.toFixed(1)} Fahrenheit, your DEAD ("RIP!")</p>
        `
     }
}

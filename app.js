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

        // Temeprature Low
        if (valueCelsius <= 35){
            html.innerHTML = `
         <div class="image">
            <img src="./assets/neve.svg">
         </div>
         <p>Your temperature is ${calculate.toFixed(1)} Fahrenheit, your temperature is low!</p>
        `
        }
        // Temeprature High
        if(valueCelsius >= 37.5){
            html.innerHTML = `
         <div class="image">
            <img src="./assets/fogo.svg">
         </div>
         <p>Your temperature is ${calculate.toFixed(1)} Fahrenheit, your temperature is high!</p>
        `
        }
        // Temeprature Normal
        if (valueCelsius > 35 && valueCelsius < 37.5){
            html.innerHTML = `
            <div class="image">
               <img src="./assets/normal.svg">
            </div>
            <p>Your temperature is ${calculate.toFixed(1)} Fahrenheit, your temperature is normal!</p>
           `
        }
        // Temeprature Normal
        if (valueCelsius <= 10 || valueCelsius >= 42 ){
            html.innerHTML = `
            <div class="image">
               <img src="./assets/dead.svg">
            </div>
            <p>Your temperature is ${calculate.toFixed(1)} Fahrenheit, you are DEAD ("RIP!")</p>
           `
        }
    }
   
}

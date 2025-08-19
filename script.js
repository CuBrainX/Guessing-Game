var counter = 0 
var randomNumber = Math.random()*100
var name = ""
var GuessedNumber = 0



function Submit(){

    let diff = Math.abs(GuessedNumber - randomNumber)
    let percent = (diff * 100) 

    let veryClose = 5
    let close = 15
    let far = 25
    let veryFar = 35
    let closeness = ""

     if (percent <= veryClose) {
            
            closeness = "Very Close"
        }else if (percent <= close) {
            closeness = "Near"
        }else if (percent <= far) {
            closeness = "Far"
        }else{
            closeness = "Very far"
        }


        let hint = ""

        if(GuessedNumber < randomNumber){
            hint = "Try Higher ↑"
        }else{
            hint = "Try Lower ↓"
        }

    name = document.getElementById("name").value

    GuessedNumber = parseInt(document.getElementById("GuessedNumber").value)

    if (GuessedNumber === randomNumber){
        document.getElementById("returnMessage").innerText = "Correct Answer"
    }else {
         document.getElementById("returnMessage").innerText = "Wrong Answer "  + name + ", " + closeness + " " + hint
    }



    counter += 1


    document.getElementById("counter").innerText = counter

    if (isNaN(GuessedNumber)){
        alert("Please write a number")
    }

    
}
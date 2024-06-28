let dayInput = document.getElementById('day-input')
let monthInput = document.getElementById('month-input')
let yearInput = document.getElementById('year-input')

let ageCalculator = document.getElementById('agecalculator')

let outputDay = document.getElementById('output-day')

ageCalculator.addEventListener("submit", (e)=> {

    
    e.preventDefault();

    const date = new Date()
    const currentDate = new Date().toLocaleDateString("de-DE")

    // penampung nilai hari
    let dayOutput = document.createElement("label")
    dayOutput.classList.add("day-output")

    let monthOutput = document.createElement("label")
    monthOutput.classList.add("month-output")

    let yearOutput = document.createElement("label")
    yearOutput.classList.add("year-output")

    console.log(date.getFullYear())
    console.log(yearInput.value)

    if(yearInput.value>0){    
        if(yearInput.value<date.getFullYear() || yearInput.value==date.getFullYear()){
                yearOutput.value=date.getFullYear()-yearInput.value
                console.log(yearOutput.value)
            }else{
                alert("Tahun tidak boleh lebih dari tahun sekarang")
            }
    }else{    
        alert("Mohon masukkan tahun dengan benar")
    }

    if(monthInput.value>0 && monthInput.value<12){
        if(monthInput.value==date.getMonth()+1){
            monthOutput.value="0"
        }else{
            if(monthInput.value<(date.getMonth()+1)   ){
                monthOutput.value = (date.getMonth()+1)-monthInput.value
            }else{
                monthOutput.value = monthInput.value-(date.getMonth()+1)
                console.log(date.getMonth())
            }
        }
    }else{
        alert("Mohon masukkan bulan dengan benar")
    }

    if(dayInput.value>0 && dayInput.value<32){
        if(dayInput.value==date.getDate()){
            dayOutput.value="0"
        }else{
            if(dayInput.value>date.getDate()){
                dayOutput.value = dayInput.value - date.getDate()
            }else{
                dayOutput.value = dayInput.value 
            }
        }
    }else{
            alert("Masukkan tanggal dengan benar")
    }
    

    const outputYear = document.getElementsByClassName("year-output");
    const outputMonth = document.getElementsByClassName("month-output")
    const outputDay = document.getElementsByClassName("day-output")

    outputYear[0].textContent = yearOutput.value
    outputMonth[0].textContent = monthOutput.value
    outputDay[0].textContent = dayOutput.value
    


    // outputDay.innerText = dayOutput.value

})
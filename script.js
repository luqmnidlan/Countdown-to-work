const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const newYears = '21 Nov 2022'

function countDown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    const totalSeconds = new Date(newYearsDate - currentDate)/ 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    
    const hours = Math.floor((totalSeconds/ 3600) % 24)

    const minutes = Math.floor((totalSeconds/60)% 60)

    const seconds = Math.floor(totalSeconds % 60)


    console.log(days, hours, minutes, seconds)

    daysEl.innerHTML = days
    hoursEl.innerHTML = FormatTime(hours)
    minutesEl.innerHTML = FormatTime(minutes)
    secondsEl.innerHTML = FormatTime(seconds)
}

function FormatTime(time){
    return time < 10 ? `0${time}` : time
}

//initial call
countDown()

setInterval(countDown, 1000)

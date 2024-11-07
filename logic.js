const month = document.getElementById('month');
const day = document.getElementById('day');
const dayNumber = document.getElementById('day-number');
const year = document.getElementById('year');

const date = new Date()

month.innerText = date.toLocaleString("en",{
    month : "long"
})

day.innerText = date.toLocaleString("en",{
    weekday : "long"
})

dayNumber.innerText = date.toLocaleDateString("en",{
    day : "2-digit"
})

year.innerText = date.getFullYear()
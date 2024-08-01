import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, push } from "https://www.gstatic.com/firebaseejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://buy-schtuff-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp (appSettings)
const database = getDatabase (app)
const moviesInDb = ref (database, "movies")

const inputFieldElement = document.getElementById ("input-field")
const addButtonElement = document.getElementById ("add-button")

addButtonElement.addEventListener ("click", function() {
    let inputValue = inputFieldElement.value

    push (moviesInDb, inputValue)

    console.log (`${inputValue} added to database`)
})
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const inputFieldElement = document.getElementById("input-field")
const addButtonElement = document.getElementById("add-button")

const appSettings = {
    databaseURL: "https://og-realtime-database-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp (appSettings)
const database = getDatabase (app)
const shoppingListInDb = ref (database, "shoppingList")

addButtonElement.addEventListener("click", function() {
    const inputValue = inputFieldElement.value

    push (shoppingListInDb, inputValue)

    console.log(`\"${inputValue}\" added to the shopping list.`)
})
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyA6uQNIRA_5yjqn1h7sWbWIDpxFn_v65Uk",
    authDomain: "realtime-database-c1c98.firebaseapp.com",
    databaseURL: "https://realtime-database-c1c98-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "realtime-database-c1c98",
    storageBucket: "realtime-database-c1c98.appspot.com",
    messagingSenderId: "234792289299",
    appId: "1:234792289299:web:850db364ecffa21ed22be6"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

function clearInputField(element) {
    element.value = ""
}

function appendItemToList(itemValue, listEl) {
    listEl.innerHTML += `<li>${itemValue}</li>`
}

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value  
    clearInputField(inputFieldEl)
    push(shoppingListInDB, inputValue)
    appendItemToList(inputValue, shoppingListEl)
})
import API from "./dataManager"

function postInterest () {
    const newInterest = {
        placeId: document.querySelector("#placesDropDown").value,
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value
    }
    API.post(newInterest)
}

export default postInterest



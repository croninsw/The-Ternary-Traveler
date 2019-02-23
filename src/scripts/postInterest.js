import API from "./dataManager"

function postInterest () {
    const newInterest = {
        placeId: document.querySelector("#location__selection").selectedIndex.value,
        name: document.querySelector("#name"),
        description: document.querySelector("#description")
    }

    API.post("interests", newInterest)
}

export default postInterest



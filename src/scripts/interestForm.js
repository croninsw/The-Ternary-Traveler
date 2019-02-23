import API from "./dataManager"

const displayForm = () => {

    const interestForm = document.querySelector("#interestsForm")

    const interestFormHTML = `
    <article>
    <fieldset id="interestForm">
    <label for="name">Name of Interest: </label>
    <input type="text" id="name" name="name"><br>
    <label for="description">Description of Interest: </label>
    <input type="text" id="description" name="desciption"><br>
    <label for="placesDropDown">Place: </label>
    <select id="placesDropDown"></select>
    </fieldset>
    <button id="submitInterest">Submit Interest</button>
    </article>
    `

    interestForm.innerHTML = interestFormHTML

    const createPlacesDropdown = place => `<option value="${place.id}">${place.name}</option>`
    let allPlaces = []
    API.getPlaces()
        .then(parsedJson => {
            allPlaces = parsedJson
            allPlaces.forEach(
                (place) => {
                    const html = createPlacesDropdown(place)
                    document.querySelector("#placesDropDown").innerHTML += html

                }
            )
            return allPlaces
        })

}





export default displayForm
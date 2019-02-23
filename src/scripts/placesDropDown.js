// import API from "./dataManager"

// const createPlacesDropdown = place => `
// <option value="${place.id}">${place.name}</option>
// `
// let allPlaces = []
// API.getPlaces()
//     .then(parsedJson => {
//         allPlaces = parsedJson
//         allPlaces.forEach(
//             (place) => {
//                 const html = createPlacesDropdown(place)
//                 document.querySelector("#placesDropDown").innerHTML += html

//             }
//         )
//         return allPlaces
//     })

// export default createPlacesDropdown

// Tried to modularize, but I kept getting an error that the console could not read id of undefined on line #4. Which was weird since all I did was steal this code from the interest form...
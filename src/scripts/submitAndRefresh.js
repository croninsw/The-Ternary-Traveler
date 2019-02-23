import loadInterests from "./populateInterest"
import API from "./dataManager";

let postNewInterest = () => {

    document.querySelector("#submitInterest").addEventListener("click", () => {
        const newInterest = {
            placeId = document.querySelector("#placesDropDown"),
            name = document.querySelector("#name").value,
            description = document.querySelector("#description").value,
        }

        API.post(newInterest).then(() => {
            loadInterests()
        })

    })
}

export default postNewInterest
import API from "./dataManager"
import loadInterests from "./populateInterest";

const deleteInterest = () => {
    document.querySelector("#populateInterests").addEventListener("click", () => {
        if (event.target.id.startsWith("delete")) {
            let id = event.target.id.split("--")[1]

            let check = confirm("Are you sure you want to delete this interest?")
            if (check === true) {
                return API.delete(id)
                .then( () => {
                    loadInterests()
                })
            } else {
                loadInterests()
            }


        }
    })
}

export default deleteInterest
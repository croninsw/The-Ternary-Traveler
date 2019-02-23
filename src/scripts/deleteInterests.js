import API from "./dataManager"

const deleteInterest = () => {
    document.querySelector("#populateInterests").addEventListener("click", () => {
        if (event.target.id.startsWith("delete")) {
            let id = event.target.id.split("--")[1]

            return API.delete(id)
                .then( () => {
                    document.querySelector("#populateInterests").innerHTML = ""
                    return
                })
        }
    })
}

export default deleteInterest
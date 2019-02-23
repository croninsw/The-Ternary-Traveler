import API from "./dataManager";


const editInterest = () => {
    document.querySelector("#populateInterests").addEventListener("click", () => {
        if (event.target.id.startsWith("edit")) {
            let id = event.target.id.split("--")[1]

            return API.update(id)

        }
    })
}

export default editInterest



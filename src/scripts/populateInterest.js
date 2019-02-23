import API from "./dataManager"
import interestObject from "./captureInterestValues"


const loadInterests = () => {
    API.getInterest()
        .then(
            (oldInterest) => {
                const outputEl = document.querySelector("#populateInterests")
                outputEl.innerHTML = ""

                oldInterest.forEach((currentObject) => {
                    let interestHTML = interestObject(currentObject)
                    outputEl.innerHTML += interestHTML
                })
            }
        )
}

export default loadInterests




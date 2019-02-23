import API from "./dataManager"

import interestObject from "./captureInterestValues"


const displayInterests = () => {


    API.getInterest()
        .then(
            (oldInterest) => {
                const outputEl = document.querySelector("#populateInterests")
                outputEl.innerHTML = ""

                oldInterest.forEach((currentObject) => {
                    let interestHTML = interestObject(currentObject)
                    interestListEl.innerHTML += interestHTML
                })
            }
        )

}

export default displayInterests




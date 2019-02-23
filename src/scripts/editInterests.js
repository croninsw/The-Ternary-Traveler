// import API from "./dataManager";
// import loadInterests from "./populateInterest";


// const editInterest = () => {
//     const interestFields = document.querySelector("#populateInterests")
//     interestFields.addEventListener("click", (event) => {
//         if (event.target.id.startsWith("edit")) {
//             let id = event.target.id.split("--")[1]

//             let interestObject = ""
//             API.getOneInterest(id).then((taco) => {
//                 interestObject = taco.find(int => int.id === id)
//                 interestFields.innerHTML = `
//                 <section id="interestObject">
//                 <div>Edit Interest Name</div>
//                 <input type="text" id="interestNameEdit" value="${interest.name}"><br>
//                 <div>Edit Interest Description</div>
//                 <input type="text" id="interestDescriptionEdit" value="${interest.description}"><br>
//                <button id="save">Save Interest</button>
//                <button id="cancel">Cancel Change</button>
//             </section>
//             `

//                 document.querySelector("#interestNameEdit").addEventListener("keyup"), (event) => {
//                     if (event.keyCode === 13) {
//                         document.querySelector("#save").click()
//                     }
//                 }
//             })

//             document.querySelector("#save").addEventListener("click", () => {
//                 interestObject.name = document.querySelector("#interestNameEdit").value
//                 API.update("interests", id, interestObject).then(() => {
//                     loadInterests()
//                 })
//             })
//         }
//     })
// }

// export default editInterest



const interestObject = (interest) => {
    return `
    <section id="interestObject">
        <h2>${interest.name}</h2>
        <div>${interest.description}</div>
       <button id="delete--${interest.id}">Edit Interest</button>
       <button id="edit--${interest.id}">Delete Interest</button>
    </section>
    `
}


export default interestObject
const interestObject = (interest) => {
  return `
    <section id="interestObject">
        <h2>${interest.name}</h2>
        <div>${interest.description}</div>
        <div>${interest.placeId.name}</div>
        <button id="delete--${interest.id}">Delete Interest</button>
    </section>
    `
}


export default interestObject
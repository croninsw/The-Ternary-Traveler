const printToDOM = (where, what) => {
    document.querySelector(`#${where}`).innerHTML += what
}
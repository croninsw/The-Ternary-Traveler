const API = {
    getInterest: () => {
    return fetch("http://localhost:8088/interests")
        .then(res => res.json())
},
getOneInterest: (id) => {
    return fetch(`http://localhost:8088/interests/${id}`)
        .then(res => res.json())
},

post: (newInterest) => {
    return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInterest)
    })
},

update: (interestId, newInterestObject) => {
    return fetch(`http://localhost:8088/articles/${interestId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInterestObject)
    })
},

delete: (interestId) => {
    return fetch(`http://localhost:8088/interests/${interestId}`, {
        method: "DELETE",
    })
},

getPlaces: () => {
    return fetch("http://localhost:8088/places")
    .then(res => res.json())
}
}

export default API


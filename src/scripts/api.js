const API = {
    post: function (database, object) {
        return fetch(`http://localhost:8088/${database}`), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }
            .then(res => res.json())
    },
    getInterests: function () {
        return fetch("http://localhost:8088/interests")
            .then(res => res.json())
    },
    getPlaces: function () {
        return fetch("http://localhost:8088/places")
            .then(res => res.json())
    },
    put: function (database, editedObject) {
        return fetch(`http://localhost:8088/${database}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedObject)
    })
    .then(res => res.json())
},
    delete: function (database, objectId) {
        return fetch(`http://localhost:8088/${database}/${objectId}`, {
        method: "DELETE"
    })
}
}


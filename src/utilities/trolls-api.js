const BASE_URL = '/api/trolls';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(troll) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(troll)
    }).then(res => res.json());
}

// export function update(troll) {
//     return fetch(`${BASE_URL}/${troll._id}`, {
//         method: "PUT",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(troll)
//     }).then(res => res.json());
// }

// export function deleteOne(trollID) {
//     return fetch(`${BASE_URL}/${trollID}`, {
//         method: "DELETE",
//         headers: {
//             "content-type": "application/json",
//         }
//     });
// }
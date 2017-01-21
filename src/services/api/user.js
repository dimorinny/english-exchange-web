import 'whatwg-fetch';

const ADD_USER = '/user/';

export function addUser(actions, user) {
    return fetch(__BASE__ + ADD_USER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then((r) => r.json())
        .then((r) => {
            actions.changeUser(r.user);
            actions.formLoaded();
        })
}

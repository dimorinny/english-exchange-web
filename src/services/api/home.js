import 'whatwg-fetch';

const LOAD_HOME = '/home';

export function getHome(actions) {
    return fetch(__BASE__ + LOAD_HOME, {
        credentials: 'same-origin'
    })
        .then((r) => r.json())
        .then((r) => {
            actions.changeForm(r.form);
            actions.changeUser(r.user);
            actions.formLoaded();
        });
}

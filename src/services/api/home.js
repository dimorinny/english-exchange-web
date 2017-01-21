import 'whatwg-fetch';

const LOAD_HOME = '/home/';

export function getHome(actions) {
    return fetch(__BASE__ + LOAD_HOME)
        .then((r) => r.json())
        .then((r) => {
            actions.changeForm(r.home.form);
            actions.changeUser(r.home.user);
            actions.formLoaded();
        });
}

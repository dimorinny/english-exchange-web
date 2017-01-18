import 'whatwg-fetch';

const LOAD_HOME = '/home/';

export function getHome() {
    return fetch(__BASE__ + LOAD_HOME).then((r) => r.json());
}

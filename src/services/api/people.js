import 'whatwg-fetch';

const LOAD_PEOPLES = '/peoples/';

export function getPeoples() {
    return fetch(__BASE__ + LOAD_PEOPLES).then((r) => r.json());
}

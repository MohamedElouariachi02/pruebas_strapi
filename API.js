class API {
    constructor(url) {
        this.url = url
    }

    getExercises()
    {
        return fetch(`${this.url}exercises`).then(response => response.json());
    }
    getExercisesByName(name)
    {
        return fetch(`${this.url}exercises?filters[Name][$eq]=${name}`).then(response => response.json());
    }
    getExercisesById(id)
    {
        return fetch(`${this.url}exercises?filters[id][$eq]=${id}`).then(response => response.json());
    }
}
module.exports = API;



// const root = 'https://rickandmortyapi.com/api/'
const root = 'https://socialnetwork-dev-stbs.2.ie-1.fl0.io/api/'

export const getCharacters = async () => {

    const response = await fetch(
        `${root}character`
    )

    const data = await response.json()

    return data.results;
}

export const loginMe = async (credentials) => {
 
    const response = await fetch(`${root}auth/login`, options)
    const data = await response.json()

    return data
}
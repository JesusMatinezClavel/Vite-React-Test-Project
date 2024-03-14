const root = 'https://rickandmortyapi.com/api/'

export const getCharacters = async () => {

    const response = await fetch(
        `${root}character`
    )

    const data = await response.json()

    return data.results;
}
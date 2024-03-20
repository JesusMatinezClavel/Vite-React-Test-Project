// const root = 'https://rickandmortyapi.com/api/'
const root = "https://socialnetwork-dev-ntsh.2.ie-1.fl0.io/api/"

export const getCharacters = async () => {

  const response = await fetch(
    `${root}character`
  )

  const data = await response.json()

  return data.results;
}

export const loginMe = async (credentials) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };
  try {
    const response = await fetch(`${root}auth/login`, options)
    const data = await response.json()

    return data
  } catch (error) {
    return data.message
  }

}

export const registerMe = async (registerData) => {
  const options = {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(registerData)
  }
  try {
    const response = await fetch(`${root}auth/register`, options)
    const data = await response.json()

    return data    
  } catch (error) {
    return data.message
  }
}



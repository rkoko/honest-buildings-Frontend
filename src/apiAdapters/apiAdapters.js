const BASE_URL = process.env.REACT_APP_API

const headers = () => {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}

export const getBuildingById = (id) =>{
  return ( fetch(`${BASE_URL}/buildings/${id}`, {
      headers: headers()
  }).then(res => res.json()))
}

export const getMgmtById = (id) => {
  return ( fetch(`${BASE_URL}/building_mgmts/${id}`, {
      headers: headers()
  }).then(res => res.json()))
}

export const getBuildingAddresses = () =>{
  return ( fetch(`${BASE_URL}/buildings/addresses`, {
      headers: headers()
  }).then(res => res.json()))
}

export const postForm = (formInput) => {
  return ( fetch(`${BASE_URL}/buildings/new`, {
      method: 'POST',
      body: JSON.stringify(formInput),
      headers: headers()
  }).then(res => res.json()))
}

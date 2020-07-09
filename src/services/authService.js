import http from './httpService'

const apiEndPoint = '/auth'

export async function login(formData) {
  const res = await http.post(apiEndPoint, formData)
  localStorage.setItem("userName", res.data.user.name)
  localStorage.setItem("email", formData.email)
  console.log(res.data)
}

export function logout(){
  localStorage.clear()
}

export function getUser(){
  return  {
    userEmail : localStorage.getItem("email"),
    userName : localStorage.getItem("userName")
  }
}
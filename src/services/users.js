import http from './httpService'

const apiEndPoint = '/register'

export async function register(formData) {
  const res = await http.post(apiEndPoint, formData)
  localStorage.setItem("userName", res.data.user.name)
  localStorage.setItem("email", formData.email)
  console.log(res.data)
}
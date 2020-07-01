import http from './httpService'

const apiEndPoint = '/user'

export function login(formData) {
  return http.post(apiEndPoint, formData)
}
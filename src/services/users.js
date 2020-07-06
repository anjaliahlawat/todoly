import http from './httpService'

const apiEndPoint = '/register'

export function register(formData) {
  return http.post(apiEndPoint, formData)
}
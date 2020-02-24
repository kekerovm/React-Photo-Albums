import axios from "axios"

export function getAuthors() {
  return new Promise((resolve, reject) => {
    axios
      .get("/authors")
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

export function getAuthor(id) {
  return new Promise((resolve, reject) => {
    axios
      .get("/authors/${id}?embed=books")
      .then(res => {
        resolve(res.data)
      })
      .catch(e => reject())
  })
}

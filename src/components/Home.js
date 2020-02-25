// import axios from "axios"

// export function getAuthors() {
//   return new Promise((resolve, reject) => {
//     axios
//       .get("/authors")
//       .then(resp => {
//         resolve(resp.data)
//       })
//       .catch(e => {
//         reject()
//       })
//   })
// }

// export function getAuthor(id) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get("/authors/${id}?embed=books")
//       .then(res => {
//         resolve(res.data)
//       })
//       .catch(e => reject())
//   })
// }

import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAlbums } from "../actions/data"

export default props => {
  const [Albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbums().then(data => setAlbum(data))
  }, [])

  return (
    <div>
      <h1>My Albums</h1>
      <div className="grid">
        {albums.map(album => (
          <Link key={"album-link-" + album.id} to={`/album${album.id}`}>
            <img src={album.coverPhoto} />
            <p className="title">{album.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

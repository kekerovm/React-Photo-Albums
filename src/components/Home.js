import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAlbums } from "../actions/data"

export default props => {
  const [Albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbums().then(data => setAlbums(data))
  }, [])

  return (
    <div>
      <h1>My Albums</h1>
      <div className="grid">
        {Albums.map(album => (
          <Link to={`/album/${album.id}`}>
            <img className="imagesAlbum" src={album.coverPhoto} />
            {/* <p className="title">{album.name}</p> */}
          </Link>
        ))}
      </div>
    </div>
  )
}

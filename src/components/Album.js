// import React, { Component } from 'react'
// import { getAlbum} from '../actions/data'
// import { Link } from 'react-router-dom'

// export default props => {
//   const [album, setAlbum] = useState({})
//   const [pictures, setPictures] = useState([])

//   useEffect(() => {
//     getAlbum(props.match.params.id).then(data => {
//       getAlbum(data)
//       setPictures(data.pictures)
//     })
//   }, [props.match.params])

//   return (
//     <div>
//       <h1>{album.name}</h1>
//       <div className="grid">
//         {pictures.map(pictures => (
//           <Link
//           key={"pictures-link-"} + picture.id"}
//           to={'/picture/${picture.id}'}
//       >
//         img src={picture.}

//       </div>
//   )

// import React, { useEffect, useState } from "react"
// import { getAlbum, getAlbums } from '../actions/data'
// import { Link } from "react-router-dom"

// export default props => {
//   const [album, setAlbum] = useState({})
//   const [pictures, setPictures] = useState([])
//   const [albums, setAlbums] = useState([])

//   useEffect(() => {
//     getAlbum(props.match.params.id).then(data => {
//       getAlbums()
//       setAlbum(data)
//       setPictures(data.pictures)
//     })

//     getAlbums().then(data => setAlbums(data))

//   }, [props.match.params])

//   return (
//     <div>
//       <h1>{album.name}</h1>
//       <div className="albums">
//         {albums.map(album => {
//           <p key to={"album-picture-link-" + album.id}>
//           <Link to={`/album/${album.id}`}>{album.name}</Link>
//           </p>
//       ))}
//       </div>
//       <div className="grid">
//         {pictures.pictures.map(picture => {
//           <Link
//             key={"picture-link-" + picture.id}
//             to={`/picture/${picture.id}`}
//           >
//             <img src={picture.url} />
//             <p className="title">{picture.name}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

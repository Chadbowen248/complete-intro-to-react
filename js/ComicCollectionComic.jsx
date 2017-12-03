import React from "react"
import styled from "styled-components"
import Axios from "axios";
import { shape, func } from "prop-types"

const SingleComic = styled.div`
width: 23%;
margin-left: 1%;
border: 1px solid #ccc;
padding: 1em;
margin-top: .5em;
margin-bottom: .5em;
margin-right: 1%;
`
const ComicImage = styled.img`
  width: 100%;
  height: 85%;
`
const ComicTitle = styled.p`
font-size: 1vw;
font-family: 'Fjalla One', sans-serif;
color: #333;
`
const ComicDeleteBtn = styled.button`
  background-color: transparent;
  border: none;
`

class ComicCollectionComic extends React.Component {
  state = {}
//   imageLoaded = () => {
//     const image = document.getElementById(this.props.details.id)
//     const imgCanvas = document.createElement("canvas")
//     const imgContext = imgCanvas.getContext("2d")
//     imgCanvas.width = image.width
//     imgCanvas.height = image.height
//     imgContext.drawImage(image, 0, 0, image.width, image.height)
//     const imgAsDataURL = imgCanvas.toDataURL().toString()
//     // console.log(typeof(imgAsDataURL))
//     // console.log(imgAsDataURL)
//     Axios.get(
//       // `http://localhost:3000/saveImage/fuck`
//       `http://localhost:3000/saveImage/${imgAsDataURL}`
//       // `http://localhost:3000/saveImage`
//     ).then(res => console.log(res))
//     // console.log(imgAsDataURL)

//     // try {
//     //   localStorage.setItem(`comic-${this.props.details.id}`, imgAsDataURL)
//     // } catch (e) {
//     //   console.log("Storage failed: " + e)
//     // }
  
// }
componentDidMount() {
  const source = this.props.details.image.medium_url
  const encoded = encodeURIComponent(source)
  Axios.get(
    `http://localhost:3000/saveImage/${encoded}`
    // `http://localhost:3000/saveImage/shit`
    // `http://localhost:3000/saveImage`
  ).then(res => console.log(res))
  // console.log(imgAsDataURL)
}
// getImage = () => {
//       Axios.get(
//       `http://localhost:3000/getImage/${this.props.details.image.medium_url}`
//       // `http://localhost:3000/saveImage`
//     ).then(res => console.log(res))
//     // console.log(imgAsDataURL)
    
  render() {
    return (
      <SingleComic>
        <ComicImage
          src={this.props.details.image.medium_url}
          crossOrigin="Anonymous"
          id={this.props.details.id}
          alt="comic"
          // onLoad={() => this.imageLoaded()}
        />
        <ComicTitle>
          {this.props.details.finalName.length > 47
            ? `${this.props.details.finalName.substring(0, 47)} ...`
            : this.props.details.finalName}
        </ComicTitle>
        <ComicDeleteBtn
          className="comic-delete-button"
          onClick={() => this.props.removeComic(`comic-${this.props.details.id}`)}
        >
          <img src="public/img/close.png" alt="close" />
        </ComicDeleteBtn>
      </SingleComic>
    )
  }
}

export default ComicCollectionComic

ComicCollectionComic.propTypes = {
  details: shape({}).isRequired,
  removeComic: func.isRequired
}

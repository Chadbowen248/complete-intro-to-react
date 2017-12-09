import React from "react"
import styled from "styled-components"
import { shape, func } from "prop-types"

const SingleComic = styled.div`
width: 18%;
margin-left: 1%;
border: 1px solid #ccc;
padding: 1em;
padding-bottom: 2em;
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
  position: relative;
  right: 7px;
  bottom: -5px;
`

class ComicCollectionComic extends React.Component {
  state = {
    imgDownloaded: false
  }

// componentDidMount() {
  // const source = this.props.details.image.small_url
  // const id = `comic-${this.props.details.id}`
//   const encoded = encodeURIComponent(source)

//   Axios.get(
//     `http://localhost:3000/saveImage/${encoded}/${id}`
//   ).then(res => this.setState({imgDownloaded: res.data}))
// }
  render() {
  const source = this.props.details.image.small_url
  const id = `comic-${this.props.details.id}`
  const encoded = encodeURIComponent(source)
    return (
      <SingleComic>
        <ComicImage
          // src={`public/img/comic-${this.props.details.id}.jpg`}
          src={`http://localhost:3000/saveImage/${encoded}/${id}`}
          crossOrigin="Anonymous"
          alt={this.props.details.finalName}
        />
        <ComicTitle>
          {this.props.details.finalName.length > 34
            ? `${this.props.details.finalName.substring(0, 34)} ...`
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

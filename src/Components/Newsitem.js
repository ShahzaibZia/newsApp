// import { hover } from '@testing-library/user-event/dist/hover'
import React, { Component } from 'react'

export class Newsitem extends Component {
 
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props
    return (
      <div className='my-3'><div className="card">
      <img src={!imageUrl?"https://womens-southerngolfassociation.org/wp-content/uploads/2021/10/Image-Not-Available.png":imageUrl} className='card-img-top' alt='...'/>
      <div className="card-body" style={{backgroundColor:"lightyellow"}}>
        <h5 className="card-title">{title}<span className="badge bg-secondary">{source}</span></h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl}target='_blank' rel='noreferrer' className="btn btn-sm btn-primary">Readmore</a>
      </div>
    </div></div>
    )
  }
}

export default Newsitem
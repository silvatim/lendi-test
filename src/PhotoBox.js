import React, {Component} from 'react';
import './PhotoBox.css';

class PhotoBox extends Component{
  render(){
    return(
       <div className="Photo-box">
         <a href={this.props.url} target="_blank">
            <img src={this.props.thumbnailUrl} alt={this.props.title}/>
          </a>
         <div className="Photo-title">
           <h3>{this.props.title}</h3>
         </div>
       </div>
    );
  }
}

export default PhotoBox;

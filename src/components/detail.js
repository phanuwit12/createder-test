import React, { Component } from "react";

export default class detail extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div className='photo'>
        <img
            src={this.props.dataDetail.image.url}
            className="card-img-top photo-product"
            alt="..."
          />
        </div>
        <h5 className="card-title">{this.props.dataDetail.name}</h5>
        <p>{this.props.dataDetail.description}</p>
        <ul>
            <li><b>origin:</b> {this.props.dataDetail.origin}</li>
            <li><b>temperament:</b> {this.props.dataDetail.temperament}</li>
            <li><b>alt_names:</b> {this.props.dataDetail.alt_names}</li>
            <li><b>wikipedia:</b> <a href={this.props.dataDetail.wikipedia_url}>{this.props.dataDetail.wikipedia_url}</a></li>
        </ul>
      </div>
    );
  }
}

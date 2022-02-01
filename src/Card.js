import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
        <div className="card bg-gumbo">
        <div className="card-body text-center">
          <h5 className="card-title">{this.props.text}</h5>
          <h5 className="card-title">{this.props.num}</h5>
        </div>
        <div className="card-footer text-start">
          <a className="text-white" href="#">{this.props.detail}</a>
        </div>
      </div>
    );
  }
}

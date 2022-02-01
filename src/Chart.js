import React, { Component } from 'react';

export default class Chart extends Component {
  
  render() {
    return (
        <div className="card">
        <div className="card-header"><i className={this.props.icon} /> {this.props.title} </div>
        <div className="card-body"><canvas id="myAreaChart" />
        </div>
      </div>
    );
  }
}

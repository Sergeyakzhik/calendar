import React from 'react';
import './Cell.css';

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <td><h4>{this.props.curDay}</h4></td>
    );
  }
}

export default Cell;

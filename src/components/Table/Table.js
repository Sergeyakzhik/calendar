import React from 'react';
import './Table.css';
import Cell from '../Cell/Cell';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  createTableHeader() {
    let thead = [];

    for(let i = 0; i < 7; i++) {
      thead.push(<th>{weekDays[i]}</th>);
    }
    return thead;
  }

  createDaysArray() {
    let curDate = new Date();
    let curMonth = curDate.getMonth();
    let curYear = curDate.getYear();
    let date = new Date(curYear, curMonth);
    let emptyCellsNum = date.getDay();
    let daysArray = [];

    for(let i = 0; i < emptyCellsNum; i++) {
      daysArray.push('');
    }

    while(date.getMonth() == curMonth) {
      daysArray.push(date.getDate());

      date.setDate(date.getDate() + 1);
    }
    return daysArray;
  }

  createRows() {
    let tbody = [];
    let daysArray = this.createDaysArray();
    let daysArrayInd = 0;

    for (let i = 0; i < 6; i++) {
      let cells = [];

      for(let j = 0; j < 7; j++) {
        cells.push(<Cell curDay={daysArray[daysArrayInd]} />);
        daysArrayInd++;
      }
      tbody.push(<tr>{cells}</tr>);
    }
    return tbody;
  }

  render() {
    return (
      <table>
        {this.createTableHeader()}
        {this.createRows()}
      </table>
    );
  }
}

export default Table;

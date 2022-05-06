import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//버튼
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
//9개 상자
class Board extends React.Component {
  
  constructor(props){
	  super(props);
	  squares[i]=this.state.xIsNext ? 'X':'O';
	  this.state={
		  squares:Array(9).fill(null),
      xIsNext: !this.state.xIsNext,
	  };
  }
	
  renderSquare(i) {
    return (<Square value={this.state.squares[i]} 
			onClick={()=>this.handleClick(i)}	
		/>);
  }
  handleClick(i){
	  const squares = this.state.squares.slice();
	  squares[i]='X';
	  this.setState({squares:squares});
  }	

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

//게임판 렌더링

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

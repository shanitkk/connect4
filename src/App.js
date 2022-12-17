import './App.css';
import React from "react";
import Circle from "./Circle";
import DropButton from "./DropButton";

class App extends React.Component {

    state = {
        board: [[0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [["button"], ["button"], ["button"], ["button"], ["button"], ["button"], ["button"]]],
        currentPlayer: 1
    };

    drop = (index) => {
        let newBoard = this.state.board;
        let i;
        for (i = this.state.board.length - 1; i >= 0; i--) {
            if (newBoard[i][index] === 0) {
                break;
            }
        }
        if (i >= 0) {
            newBoard[i][index] = this.state.currentPlayer;
            this.setState({
                board: newBoard,
                currentPlayer: (this.state.currentPlayer === 1 ? 2 : 1)
            })
        }
    }

    render() {
        return (
            <div className="App">
                <h1> Connect-4 </h1>
                <table style={{alignItems: "center"}}>
                    {this.state.board.map((row, index) => {
                        return (
                            <tr>
                                {row.map((cell, cellIndex) => {
                                    return (
                                        <td>
                                            {/*{console.log("r " + row,"c " + cell,"i " + cellIndex)}*/}
                                            {cell === 0 ? <Circle color="white"/> :
                                                (cell === 1 ? <Circle color="red"/> :
                                                    (cell === 2 ? <Circle color="orange"/> :
                                                        <DropButton
                                                            index={cellIndex}
                                                            dropCircle={this.drop}
                                                        />))}

                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}

export default App;

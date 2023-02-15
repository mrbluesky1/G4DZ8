import React from "react";

class Square extends React.component {
    render() {
        return(
            <button className={"square"}>

            </button>
        )
    }
}

class Board extends React.component {
    renderSquare(i) {
        return <Square/>
    }

    render() {
        const status = 'Следующий игрок 0'

        return(
            <div>
                <div className={"status"}>{status}</div>
                <div className={"board5-row"}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={"board5-row"}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={"board5-row"}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.component {
    render() {
        return(
            <div className={"game"}>
                <div className={"game-board"}>
                    <Board/>
                </div>
                <div className={"game-info"}>
                    <div></div>
                    <ol></ol>
                </div>
            </div>
        )
    }
}

export default Game;
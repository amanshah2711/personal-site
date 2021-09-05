function Board({width, height, color_map, pieces, callback}) {
    const handleClick = function boardCallback(coordinate){
        callback(coordinate)
    }
    const board = [];
    for (let i = 0; i < height; i+=1){
        var row = [];
        for (let j = 0; j < width; j += 1){
            var name = i.toString() + " " + j.toString()
            row.push(<Square name={name} styler={color_map(i,j)} piece={pieces[i][j]} key={j} coordinate={new Coordinate(i, j)} callback={handleClick}></Square>)
        }
        board.push(<div className="row justify-content-center" key={i}>{row}</div>)
    }
    return (
        <div className="container">
            {board}
        </div>
    )
}


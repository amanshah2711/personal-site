function Coordinate(row, col) {
    this.row = row;
    this.col = col
}
Coordinate.prototype.toString = function CoordinateToString() {
    return `${this.row} ${this.col}`;
};

function Square(props) {
    const [piece, setPiece] = React.useState(null);
    const onClick = (e) => props.callback(props.coordinate)
    const divStyle = {
        width: '100\%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        paddingBottom: '100\%'
    };
    return (
        <div className="col-1 square" style={props.styler} onClick={onClick}>
            <img src={props.piece}  style={divStyle} alt=""/>
        </div>
    )
}

const manhattanDistance = (x,y) => Math.abs(x) + Math.abs(y);
const chess_styler = (i,j) => (manhattanDistance(i,j) % 2 === 0) ? {backgroundColor : "#93602B"} : {backgroundColor: "#EACFB6"}
const BOARD_DIM = 8

const nameToPiece = {
    "wking": "{{ url_for('static', filename='img/wK.png') }}",
    "wqueen": 'img/wQ.png',
    "wbishop": 'img/wB.png',
    "wknight": 'img/wN.png',
    "wrook": 'img/wR.png',
    "wpawn": 'img/wP.png',
    "bking": 'img/bK.png',
    "bqueen": 'img/bQ.png',
    "bbishop": 'img/bB.png',
    "bknight": 'img/bN.png',
    "brook": 'img/bR.png',
    "bpawn": 'img/bP.png',
    "blank": 'img/blank.png'
}

const init_loc = Array.from(Array(BOARD_DIM), () => new Array(BOARD_DIM))

for (let j = 0; j < BOARD_DIM; j += 1){
	init_loc[1][j] = "wpawn";
	init_loc[7][j] = "bpawn";
}

function ChessBoard(){
	const [activePieces, setActivePieces] = React.useState({startPos: null, endPos: null});
	var pieces = new Array(BOARD_DIM)
	for (let i = 0; i < BOARD_DIM; i += 1){
		pieces[i] = new Array(BOARD_DIM)
	}
	const [grid, setGrid] = React.useState(pieces);
	const handleClick = function chessCallback(coordinate){
		if (activePieces['startPos'] === null) {
			setActivePieces({startPos: coordinate.toString(), endPos: null});
		} else {
			setActivePieces(function update(prevActivePieces){
				return {'startPos': prevActivePieces['startPos'], 'endPos': coordinate.toString()}
			})
			const requestOptions = {method:'POST',
			 												headers: { 'Content-Type': 'application/json' },
															body: JSON.stringify(activePieces)};
			fetch('/chess_move', requestOptions).then(response => response.json()).then(data => {
				var pieces = new Array(BOARD_DIM)
				for (let i = 0; i < BOARD_DIM; i += 1){
					pieces[i] = new Array(BOARD_DIM)
				}
				for (const key in data){
					pieces[parseInt(key[0])][parseInt(key[1])] = nameToPiece[data[key]];
				}
				setGrid(pieces);
			})
		}
	}
	return (
		<div class="container">
			<Board width={BOARD_DIM} height={BOARD_DIM} color_map={chess_styler} pieces={grid} callback={handleClick}></Board>
		</div>
	)
}

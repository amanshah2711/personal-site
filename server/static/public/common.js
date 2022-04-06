"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function CSM() {
    var _ReactRouterDOM = ReactRouterDOM,
        Link = _ReactRouterDOM.Link;

    var _React$useState = React.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        rows = _React$useState2[0],
        setRows = _React$useState2[1];

    React.useEffect(function () {
        fetch('/load_csm').then(function (response) {
            return response.json();
        }).then(function (data) {
            setRows(data);
        });
    }, []);
    return React.createElement(
        "div",
        { "class": "container" },
        React.createElement(NavBar, null),
        React.createElement(
            "div",
            { "class": "row justify-content-md-center" },
            React.createElement("hr", { "class": "col-md-11" }),
            React.createElement(
                "div",
                { "class": "col-md-10" },
                React.createElement(
                    "h3",
                    { style: { color: "#047BFE" } },
                    "EECS16B Spring 2022"
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "row justify-content-md-center" },
            React.createElement(
                "div",
                { "class": "col-md-5" },
                React.createElement(
                    "p",
                    null,
                    " ",
                    React.createElement(
                        "b",
                        null,
                        "Section Time:"
                    ),
                    " Mon 9:30AM - 11:00AM PDT"
                ),
                React.createElement(
                    "p",
                    null,
                    " ",
                    React.createElement(
                        "b",
                        null,
                        "Section Location:"
                    ),
                    " Kresge 110MC"
                ),
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "b",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://docs.google.com/forms/d/e/1FAIpQLSe051PwRPnKIJ9zPWQhA-6VBW3PgnyunvbA6cT75uswLXWJPQ/viewform" },
                            "Anonymous Section Feedback Form"
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { "class": "col-md-5" },
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "p",
                            null,
                            " Feel free to contact me at amanshah2711@berkeley.edu with any questions about eecs16b, math, life at Berkeley, or anything else."
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Additional resources or helpful links located at the bottom of the page."
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "row justify-content-md-center" },
            React.createElement("hr", { "class": "col-md-11" }),
            React.createElement(
                "div",
                { "class": "col-md-10" },
                React.createElement(
                    "h3",
                    { style: { color: "#047BFE" } },
                    "Schedule"
                ),
                React.createElement(
                    "table",
                    { "class": "table table-striped table-borderless table-hover" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "th",
                                null,
                                "#"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "Topic"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "Worksheet"
                            )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        rows && rows.map(function (row) {
                            return React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    row.num
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    row.title,
                                    React.createElement("br", null),
                                    React.createElement(
                                        "span",
                                        { "class": "badge bg-primary" },
                                        React.createElement(
                                            "a",
                                            { "class": "text-white text-decoration-none", href: row.note },
                                            "Notes"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    React.createElement(
                                        "a",
                                        { "class": "text-decoration-none", href: row.worksheet },
                                        row.wksht_name
                                    ),
                                    " ",
                                    React.createElement("br", null),
                                    " ",
                                    React.createElement(
                                        "span",
                                        { "class": "badge bg-primary" },
                                        React.createElement(
                                            "a",
                                            { "class": "text-white text-decoration-none", href: row.solution },
                                            "Solution"
                                        )
                                    )
                                )
                            );
                        })
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "row justify-content-md-center" },
            React.createElement("hr", { "class": "col-md-11" }),
            React.createElement(
                "div",
                { "class": "col-md-10" },
                React.createElement(
                    "h3",
                    { style: { color: "#047BFE" } },
                    "Additional Resources"
                ),
                React.createElement(
                    "ul",
                    { "class": "list-group list-group-flush" },
                    React.createElement(
                        "li",
                        { "class": "list-group-item " },
                        " ",
                        React.createElement(
                            Link,
                            { to: "/pages/projections", "class": "nav-link" },
                            "1D Projections"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "list-group-item " },
                        " ",
                        React.createElement(
                            Link,
                            { to: "/pages/transposes", "class": "nav-link" },
                            "Geometric Interpretation of Transposes"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "list-group-item " },
                        " ",
                        React.createElement(
                            Link,
                            { to: "/pages/geometry", "class": "nav-link" },
                            "Geometry of Linear Transformations"
                        )
                    )
                )
            )
        )
    );
}


"use strict";

function NavBar() {
  var _ReactRouterDOM = ReactRouterDOM,
      NavLink = _ReactRouterDOM.NavLink,
      Link = _ReactRouterDOM.Link;

  return React.createElement(
    "div",
    { "class": "row justify-content-md-center" },
    React.createElement(
      "div",
      { "class": "col-md-10" },
      React.createElement(
        "nav",
        { "class": "navbar navbar-expand-lg navbar-light" },
        React.createElement(
          "div",
          { "class": "navbar-brand" },
          "AMAN SHAH"
        ),
        React.createElement(
          "button",
          { "class": "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
          React.createElement("span", { "class": "navbar-toggler-icon" })
        ),
        React.createElement(
          "div",
          { "class": "collapse navbar-collapse", id: "navbarSupportedContent" },
          React.createElement(
            "div",
            { "class": "navbar-nav" },
            React.createElement(
              NavLink,
              { to: "/EECS16B", "class": "nav-link text-decoration-none", activeStyle: {
                  fontWeight: "bold",
                  color: "black" } },
              "EECS16B"
            ),
            React.createElement(
              NavLink,
              { to: "/CS61A", "class": "nav-link text-decoration-none", activeStyle: {
                  fontWeight: "bold",
                  color: "black" } },
              "CS61A"
            )
          )
        )
      )
    )
  );
}


"use strict";

function Board(_ref) {
    var width = _ref.width,
        height = _ref.height,
        color_map = _ref.color_map,
        pieces = _ref.pieces,
        callback = _ref.callback;

    var handleClick = function boardCallback(coordinate) {
        callback(coordinate);
    };
    var board = [];
    for (var i = 0; i < height; i += 1) {
        var row = [];
        for (var j = 0; j < width; j += 1) {
            var name = i.toString() + " " + j.toString();
            row.push(React.createElement(Square, { name: name, styler: color_map(i, j), piece: pieces[i][j], key: j, coordinate: new Coordinate(i, j), callback: handleClick }));
        }
        board.push(React.createElement(
            "div",
            { className: "row justify-content-center", key: i },
            row
        ));
    }
    return React.createElement(
        "div",
        { className: "container" },
        board
    );
}


'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Coordinate(row, col) {
    this.row = row;
    this.col = col;
}
Coordinate.prototype.toString = function CoordinateToString() {
    return this.row + ' ' + this.col;
};

function Square(props) {
    var _React$useState = React.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        piece = _React$useState2[0],
        setPiece = _React$useState2[1];

    var onClick = function onClick(e) {
        return props.callback(props.coordinate);
    };
    var divStyle = {
        width: '100\%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        paddingBottom: '100\%'
    };
    return React.createElement(
        'div',
        { className: 'col-1 square', style: props.styler, onClick: onClick },
        React.createElement('img', { src: props.piece, style: divStyle, alt: '' })
    );
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Teaching() {
    var _ReactRouterDOM = ReactRouterDOM,
        Link = _ReactRouterDOM.Link;

    var _React$useState = React.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        rows = _React$useState2[0],
        setRows = _React$useState2[1];

    React.useEffect(function () {
        fetch('/load_discussion').then(function (response) {
            return response.json();
        }).then(function (data) {
            setRows(data);
        });
    }, []);
    return React.createElement(
        "div",
        { "class": "container" },
        React.createElement(NavBar, null),
        React.createElement(
            "div",
            { "class": "row justify-content-md-center" },
            React.createElement("hr", { "class": "col-md-11" }),
            React.createElement(
                "div",
                { "class": "col-md-10" },
                React.createElement(
                    "h3",
                    { style: { color: "#047BFE" } },
                    "CS61A Fall 2021"
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "row justify-content-md-center" },
            React.createElement(
                "div",
                { "class": "col-md-5" },
                React.createElement(
                    "p",
                    null,
                    " ",
                    React.createElement(
                        "b",
                        null,
                        "Discussion:"
                    ),
                    " Wed 6:30PM - 8:00PM PDT"
                ),
                React.createElement(
                    "p",
                    null,
                    " ",
                    React.createElement(
                        "b",
                        null,
                        "Lab:"
                    ),
                    " Wed 9:30AM - 11:00AM PDT"
                ),
                React.createElement(
                    "p",
                    null,
                    " ",
                    React.createElement(
                        "b",
                        null,
                        "Office Hours:"
                    ),
                    " Wed 5:00PM - 6:00PM PDT"
                ),
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "b",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://docs.google.com/forms/d/e/1FAIpQLSe051PwRPnKIJ9zPWQhA-6VBW3PgnyunvbA6cT75uswLXWJPQ/viewform" },
                            "Anonymous Discussion Feedback Form"
                        )
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "b",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://docs.google.com/forms/d/e/1FAIpQLSc0jWgEhHMV0HuSL7Zh7x0mU60Zc22m3mTawDy5dcch8bFNqg/viewform" },
                            "Anonymous Lab Feedback Form"
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { "class": "col-md-5" },
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "p",
                            null,
                            " Feel free to contact me at amanshah2711@berkeley.edu with any questions about cs61a, math, life at Berkeley, or anything else."
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Additional resources or helpful links located at the bottom of the page."
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "row justify-content-md-center" },
            React.createElement("hr", { "class": "col-md-11" }),
            React.createElement(
                "div",
                { "class": "col-md-10" },
                React.createElement(
                    "h3",
                    { style: { color: "#047BFE" } },
                    "Schedule"
                ),
                React.createElement(
                    "table",
                    { "class": "table table-striped table-borderless table-hover" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "th",
                                null,
                                "#"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "Topic"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "Worksheet"
                            )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        rows && rows.map(function (row) {
                            return React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    row.num
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    row.title,
                                    React.createElement("br", null),
                                    React.createElement(
                                        "span",
                                        { "class": "badge bg-primary" },
                                        React.createElement(
                                            "a",
                                            { "class": "text-white text-decoration-none", href: row.slide },
                                            "Slides"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    React.createElement(
                                        "a",
                                        { "class": "text-decoration-none", href: row.worksheet },
                                        row.wksht_name
                                    ),
                                    " ",
                                    React.createElement("br", null),
                                    " ",
                                    React.createElement(
                                        "span",
                                        { "class": "badge bg-primary" },
                                        React.createElement(
                                            "a",
                                            { "class": "text-white text-decoration-none", href: row.solution },
                                            "Solution"
                                        )
                                    )
                                )
                            );
                        })
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "row justify-content-md-center" },
            React.createElement("hr", { "class": "col-md-11" }),
            React.createElement(
                "div",
                { "class": "col-md-10" },
                React.createElement(
                    "h3",
                    { style: { color: "#047BFE" } },
                    "Additional Resources"
                ),
                React.createElement(
                    "ul",
                    { "class": "list-group list-group-flush" },
                    React.createElement(
                        "li",
                        { "class": "list-group-item " },
                        " ",
                        React.createElement(
                            Link,
                            { to: "/pages/count_stairways", "class": "nav-link" },
                            "Count Stairways Breakdown"
                        )
                    )
                )
            )
        )
    );
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var manhattanDistance = function manhattanDistance(x, y) {
	return Math.abs(x) + Math.abs(y);
};
var chess_styler = function chess_styler(i, j) {
	return manhattanDistance(i, j) % 2 === 0 ? { backgroundColor: "#93602B" } : { backgroundColor: "#EACFB6" };
};
var BOARD_DIM = 8;

var nameToPiece = {
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
};

var init_loc = Array.from(Array(BOARD_DIM), function () {
	return new Array(BOARD_DIM);
});

for (var j = 0; j < BOARD_DIM; j += 1) {
	init_loc[1][j] = "wpawn";
	init_loc[7][j] = "bpawn";
}

function ChessBoard() {
	var _React$useState = React.useState({ startPos: null, endPos: null }),
	    _React$useState2 = _slicedToArray(_React$useState, 2),
	    activePieces = _React$useState2[0],
	    setActivePieces = _React$useState2[1];

	var pieces = new Array(BOARD_DIM);
	for (var i = 0; i < BOARD_DIM; i += 1) {
		pieces[i] = new Array(BOARD_DIM);
	}

	var _React$useState3 = React.useState(pieces),
	    _React$useState4 = _slicedToArray(_React$useState3, 2),
	    grid = _React$useState4[0],
	    setGrid = _React$useState4[1];

	var handleClick = function chessCallback(coordinate) {
		if (activePieces['startPos'] === null) {
			setActivePieces({ startPos: coordinate.toString(), endPos: null });
		} else {
			setActivePieces(function update(prevActivePieces) {
				return { 'startPos': prevActivePieces['startPos'], 'endPos': coordinate.toString() };
			});
			var requestOptions = { method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(activePieces) };
			fetch('/chess_move', requestOptions).then(function (response) {
				return response.json();
			}).then(function (data) {
				var pieces = new Array(BOARD_DIM);
				for (var _i = 0; _i < BOARD_DIM; _i += 1) {
					pieces[_i] = new Array(BOARD_DIM);
				}
				for (var key in data) {
					pieces[parseInt(key[0])][parseInt(key[1])] = nameToPiece[data[key]];
				}
				setGrid(pieces);
			});
		}
	};
	return React.createElement(
		"div",
		{ "class": "container" },
		React.createElement(NavBar, null),
		React.createElement(Board, { width: BOARD_DIM, height: BOARD_DIM, color_map: chess_styler, pieces: grid, callback: handleClick })
	);
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Pages(_ref) {
    var match = _ref.match;

    var userID = +match.params.id;
    console.log(match.url);

    var _React$useState = React.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        rows = _React$useState2[0],
        setRows = _React$useState2[1];

    function newTypeset() {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
    React.useEffect(function () {
        fetch(match.url).then(function (response) {
            return response.text();
        }).then(function (data) {
            var elem = document.getElementById("holder");
            elem.innerHTML = data;
            newTypeset();
        });
    }, []);
    return React.createElement(
        "div",
        { "class": "container" },
        React.createElement(NavBar, null),
        React.createElement("div", { id: "holder" })
    );
}


"use strict";

function App() {
			var _ReactRouterDOM = ReactRouterDOM,
			    BrowserRouter = _ReactRouterDOM.BrowserRouter,
			    Route = _ReactRouterDOM.Route,
			    Switch = _ReactRouterDOM.Switch;

			return React.createElement(
						BrowserRouter,
						null,
						React.createElement(
									"div",
									null,
									React.createElement(
												Switch,
												null,
												React.createElement(Route, { exact: true, path: "/", render: function render() {
																		return React.createElement(CSM, null);
															} }),
												React.createElement(Route, { exact: true, path: "/CS61A", render: function render() {
																		return React.createElement(Teaching, null);
															} }),
												React.createElement(Route, { exact: true, path: "/EECS16B", render: function render() {
																		return React.createElement(CSM, null);
															} }),
												React.createElement(Route, { exact: true, path: "/chess", render: function render() {
																		return React.createElement(ChessBoard, null);
															} }),
												React.createElement(Route, { path: "/pages/:id", render: function render(props) {
																		return React.createElement(Pages, props);
															} })
									)
						)
			);
}


'use strict';

var app = ReactDOM.render(React.createElement(App, null), document.getElementById('content'));


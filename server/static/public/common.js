"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function CSM() {
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
        React.createElement(
            "div",
            { "class": "row justify-content-md-center" },
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
                                    React.createElement("br", null)
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
                            "a",
                            { href: "https://www.youtube.com/playlist?app=desktop&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", "class": "nav-link" },
                            "Essence of Linear Algebra:3Blue1Brown"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "list-group-item " },
                        " ",
                        React.createElement(
                            "a",
                            { href: "https://people.eecs.berkeley.edu/~wkahan/MathH110/index.html", "class": "nav-link" },
                            "William Kahan: MathH110 Notes"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "list-group-item " },
                        " ",
                        React.createElement(
                            "a",
                            { href: "https://gregorygundersen.com/blog/2018/12/10/svd/#trefethen1997numerical", "class": "nav-link" },
                            "Gregory Gunderson: SVD as Simply as Possible"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "list-group-item " },
                        " ",
                        React.createElement(
                            "a",
                            { href: "https://gregorygundersen.com/blog/2018/10/24/matrices/", "class": "nav-link" },
                            "Gregory Gunderson: A Geometrical Understanding of Matrices "
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "list-group-item " },
                        " ",
                        React.createElement(
                            "a",
                            { href: "https://trigonography.com/2016/08/25/chaikovskys-involute-pinwheel/", "class": "nav-link" },
                            "Geometric Power Series: sin and cos via Chaikovskys Pinwheel "
                        )
                    )
                )
            )
        )
    );
}


"use strict";

function NavBar() {
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
              "li",
              { "class": "nav-item" },
              React.createElement(
                "a",
                { "class": "nav-link", href: "/blog" },
                "Blog"
              )
            ),
            React.createElement(
              "li",
              { "class": "nav-item" },
              React.createElement(
                "a",
                { "class": "nav-link", href: "/project" },
                "Project"
              )
            ),
            React.createElement(
              "li",
              { "class": "nav-item" },
              React.createElement(
                "a",
                { "class": "nav-link", href: "/chess" },
                "Chess"
              )
            ),
            React.createElement(
              "li",
              { "class": "nav-item dropdown" },
              React.createElement(
                "a",
                { "class": "nav-link dropdown-toggle", href: "#", id: "navbarDropdownMenuLink", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                "Teaching"
              ),
              React.createElement(
                "div",
                { "class": "dropdown-menu", "aria-labelledby": "navbarDropdownMenuLink" },
                React.createElement(
                  "a",
                  { href: "/eecs16b", "class": "dropdown-item" },
                  "EECS16B"
                ),
                React.createElement(
                  "a",
                  { href: "/cs61a", "class": "dropdown-item" },
                  "CS61A"
                )
              )
            )
          )
        )
      )
    ),
    React.createElement("hr", { "class": "col-md-11" })
  );
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Blog() {
    var _ReactRouterDOM = ReactRouterDOM,
        Link = _ReactRouterDOM.Link;

    var remarkGfm = remarkGfm;

    var _React$useState = React.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        posts = _React$useState2[0],
        setPosts = _React$useState2[1];

    var remarkMath = remarkMath;
    var rehypeKatex = rehypeKatex;

    var markdownSource = "$$ \\therefore \\frac{r_{Drawf}^3}{40,000^2} = \\frac{1^3}{1^2}$$";

    return React.createElement(
        "div",
        { "class": "container", id: "santa" },
        React.createElement(
            ReactMarkdown,
            { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] },
            markdownSource
        )
    );
}


"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Teaching() {
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
        React.createElement(
            "div",
            { "class": "row justify-content-md-center" },
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
                React.createElement("ul", { "class": "list-group list-group-flush" })
            )
        )
    );
}


"use strict";


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
        fetch("/blog" + match.url).then(function (response) {
            return response.text();
        }).then(function (data) {
            var elem = document.getElementById("holder");
            elem.innerHTML = data;
            newTypeset();
        });
    }, []);
    return React.createElement("div", { "class": "container", id: "holder" });
}


"use strict";

function App() {
	return React.createElement(
		"div",
		null,
		React.createElement(NavBar, null),
		React.createElement(Teaching, null)
	);
}


'use strict';

var app = ReactDOM.render(React.createElement(App, null), document.getElementById('content'));


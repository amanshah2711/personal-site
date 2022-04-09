function Pages({match}){
    const userID = +match.params.id;
    console.log(match.url) 
    const [rows, setRows] = React.useState(null);
    function newTypeset(){
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }
    React.useEffect(() => {
        fetch(match.url)
        .then(response => response.text())
        .then(data => {
            var elem = document.getElementById("holder");
            elem.innerHTML = data;
            newTypeset();
        }
    )
    }, [])
    return (
        <div class="container">
        <div id="holder">
        </div>
        </div>

    );
}

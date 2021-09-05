function Pages({match}){
    const userID = +match.params.id;
    console.log(userID) 
    const [rows, setRows] = React.useState(null);
    function newTypeset(){
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }
    React.useEffect(() => {
        fetch('/pages/count_stairways')
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
        <NavBar/>
        <div id="holder">
        </div>
        </div>

    );
}

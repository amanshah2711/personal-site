function NavBar(){
  var { NavLink, Link } = ReactRouterDOM;
  return (
    <div class="row justify-content-md-center">
      <div class="col-md-10">
          <nav class="navbar navbar-expand-lg navbar-light">
              <div class="navbar-brand">AMAN SHAH</div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-nav">
                  <NavLink to='/' class="nav-link text-decoration-none" activeStyle={{
    fontWeight: "bold",
    color: "black"
  }}>Teaching</NavLink>
                </div>
              </div>
          </nav>
      </div>
  </div>
);
}

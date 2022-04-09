function CSM(){
        var { Link } = ReactRouterDOM;

        const [rows, setRows] = React.useState(null)
        React.useEffect(() => {
            fetch('/load_csm')
            .then(response => response.json())
            .then(data => {
                setRows(data);
            }
        )
        }, [])
        return (
            <div class="container">
                <div class="row justify-content-md-center">
                    <hr class="col-md-11"></hr>
                    <div class="col-md-10">
                        <h3  style={{color:"#047BFE"}}>EECS16B Spring 2022</h3>
                    </div>
                </div>
                  <div class="row justify-content-md-center">
                      <div class="col-md-5">
                             <p> <b>Section Time:</b> Mon 9:30AM - 11:00AM PDT</p>
                             <p> <b>Section Location:</b> Kresge 110MC</p>
                             <p><b><a href="https://docs.google.com/forms/d/e/1FAIpQLSe051PwRPnKIJ9zPWQhA-6VBW3PgnyunvbA6cT75uswLXWJPQ/viewform">Anonymous Section Feedback Form</a></b></p>
                      </div>
                      <div class="col-md-5">
                          <ul>
                              <li>
                                  <p> Feel free to contact me at amanshah2711@berkeley.edu with any questions about eecs16b, math, life at Berkeley, or anything else.</p>
                              </li>
                              <li>
                                  Additional resources or helpful links located at the bottom of the page.
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="row justify-content-md-center">
                      <hr class="col-md-11"></hr>
                      <div class="col-md-10">
                          <h3  style={{color:"#047BFE"}}>Schedule</h3>
                                  <table class="table table-striped table-borderless table-hover">
                                      <thead>
                                          <tr>
                                              <th>#</th>
                                              <th>Topic</th>
                                              <th>Worksheet</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {rows && rows.map((row)=>(
                                              <tr>
                                                <td>{row.num}</td>
                                                <td>{row.title}<br/></td>
                                                <td><a class="text-decoration-none" href={row.worksheet}>{row.wksht_name}</a> <br/> <span class="badge bg-primary"><a class="text-white text-decoration-none" href={row.solution}>Solution</a></span></td>
                                              </tr>
                                          ))}
                                      </tbody>
                                  </table>
                      </div>
                  </div>
                  <div class="row justify-content-md-center">
                      <hr class="col-md-11"></hr>
                      <div class="col-md-10">
                          <h3  style={{color:"#047BFE"}}>Additional Resources</h3>

                          <ul class="list-group list-group-flush">
                            <li class="list-group-item "> <Link to='/pages/projections' class="nav-link">1D Projections</Link></li>
                            <li class="list-group-item "> <Link to='/pages/transposes' class="nav-link">Geometric Interpretation of Transposes</Link></li>
                            <li class="list-group-item "> <Link to='/pages/geometry' class="nav-link">Geometry of Linear Transformations</Link></li>
                            <li class="list-group-item "> <a href='https://www.youtube.com/playlist?app=desktop&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' class="nav-link">Essence of Linear Algebra:3Blue1Brown</a></li>
                          </ul>
                      </div>
                  </div>
            </div>
        )
    }

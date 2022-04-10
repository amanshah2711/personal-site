function Teaching(){
        var { Link } = ReactRouterDOM;

        const [rows, setRows] = React.useState(null)
        React.useEffect(() => {
            fetch('/load_discussion')
            .then(response => response.json())
            .then(data => {
                setRows(data);
            }
        )
        }, [])
        return (
            <div class="container">
                <NavBar/>
                <div class="row justify-content-md-center">
                    <hr class="col-md-11"></hr>
                    <div class="col-md-10">
                        <h3  style={{color:"#047BFE"}}>CS61A Fall 2021</h3>
                    </div>
                </div>
                  <div class="row justify-content-md-center">
                      <div class="col-md-5">
                             <p> <b>Discussion:</b> Wed 6:30PM - 8:00PM PDT</p>
                             <p> <b>Lab:</b> Wed 9:30AM - 11:00AM PDT</p>
                             <p> <b>Office Hours:</b> Wed 5:00PM - 6:00PM PDT</p>

                             <p><b><a href="https://docs.google.com/forms/d/e/1FAIpQLSe051PwRPnKIJ9zPWQhA-6VBW3PgnyunvbA6cT75uswLXWJPQ/viewform">Anonymous Discussion Feedback Form</a></b></p>
                             <p><b><a href="https://docs.google.com/forms/d/e/1FAIpQLSc0jWgEhHMV0HuSL7Zh7x0mU60Zc22m3mTawDy5dcch8bFNqg/viewform">Anonymous Lab Feedback Form</a></b></p>

                      </div>
                      <div class="col-md-5">
                          <ul>
                              <li>
                                  <p> Feel free to contact me at amanshah2711@berkeley.edu with any questions about cs61a, math, life at Berkeley, or anything else.</p>
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
                                                <td>{row.title}<br/><span class="badge bg-primary"><a class="text-white text-decoration-none" href={row.slide}>Slides</a></span></td>
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
                            <li class="list-group-item "> <Link to='/pages/count_stairways' class="nav-link">Count Stairways Breakdown</Link></li>
                          </ul>
                      </div>
                  </div>
            </div>
        )
    }

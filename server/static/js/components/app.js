function App() {
			let { BrowserRouter, Route, Switch } = ReactRouterDOM;
      return (
				<BrowserRouter>
	        <div class="container">
				<NavBar/>
				<Switch>
	            <Route exact path="/" render={() => (<CSM/>)}/>
	            <Route exact path="/CS61A" render={() => (<Teaching/>)} />
	            <Route exact path="/EECS16B" render={() => (<CSM/>)} />
							<Route exact path="/chess" render={() => (<ChessBoard/>)} />
						    <Route path="/pages/:id" render={(props) => (<Pages {...props}/>)} />
	          </Switch>
	        </div>
	      </BrowserRouter>
			);
    }

function App() {
			let { BrowserRouter, Route, Switch } = ReactRouterDOM;
      return (
				<BrowserRouter>
	        <div>
	          <Switch>
	            <Route exact path="/" render={() => (<Teaching/>)}/>
	            <Route exact path="/teaching" render={() => (<Teaching/>)} />
							<Route exact path="/chess" render={() => (<ChessBoard/>)} />
							<Route path="/pages/:id" render={(props) => (<Pages {...props}/>)} />
	          </Switch>
	        </div>
	      </BrowserRouter>
			);
    }

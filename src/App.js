import React, { Component } from 'react'
import Content from './container/contentsPage'
import Detail from './container/detailPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      dataDetail:[]
    }
    this.handler = this.handler.bind(this);

  }
  handler(value) {
    this.setState({
      dataDetail: value
    });
}
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/home">
              <Content {...this.state} action={this.handler}/>
            </Route>
            <Route path="/detail">
              {()=>{
                if(this.state.dataDetail.length === 0){
                  return <Redirect to="/home" />
                }
                else{
                  return <Detail {...this.state} />
                }
              }}
              
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
      </Router>
    );
  }
}

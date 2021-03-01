import React, { Component } from 'react'
import {} from './theme.css'
import { withRouter } from "react-router-dom";
class contents extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    toPath (path) {
        this.props.history.push(path)
      }
    render() {
        return (
            <div>
                <div className='container'>
                    { this.props.data.map((value, index)=>{
                        return(
                            <div key={index} className="card" >
                                <img src={value.image?.url} className="card-img-top img-product" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{value.name}</h5>
                                    <p className="card-text">{value.description}</p>
                                    <button  onClick={()=> {this.props.action(value); this.toPath('/detail')}} className="btn btn-primary" >Go somewhere</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(contents)
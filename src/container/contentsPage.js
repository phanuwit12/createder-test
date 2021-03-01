import React, { Component } from "react";
import Content from "../components/contents";
import axios from "axios";
const postsPerPage = 4;
let arrayForHoldingPosts = [];
export default class contentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataFilter: [],
      dataShow: [],
      next: 4,
      q: "",
    };
    this.filterList = this.filterList.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://api.thecatapi.com/v1/breeds",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-api-key": "DEMO-API-KEY",
      },
    })
      .then((response) => {
        // console.log(response.data)
        this.setState({ 
            data: response.data,
            dataFilter:response.data,
         },()=>{
          arrayForHoldingPosts = []
         });
          this.loopWithSlice(0, postsPerPage);
      })
      .catch((err) => console.error(err));
  }

  loopWithSlice = (start, end) => {
    const slicedPosts = this.state.dataFilter.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    this.setState({ dataShow: arrayForHoldingPosts });
  };

  handleShowMorePosts() {
    this.loopWithSlice(this.state.next, this.state.next + postsPerPage);
    this.setState((prevState) => ({ next: prevState.next + postsPerPage }));
  }
//   componentWillReceiveProps(nextProps) {
//     this.setState(
//       {
//         data: nextProps.data,
//         dataFilter: nextProps.dataFilter
//       },
//       () => this.filterList()
//     );
//   }
  onChange(event) {
    const q = event.target.value.toLowerCase();
    this.setState({ q:q },() => this.filterList());
    
    // 
  }

  filterList() {
    let data = this.state.data;
    let q = this.state.q;

    data = data.filter(function (value) {
        // console.log(value.name)
      return value.name.toLowerCase().indexOf(q) !== -1; // returns true or false
    });
    console.log(data)
    this.setState({ dataFilter: data, next: 4, },
      ()=>{
        arrayForHoldingPosts=[]
        this.loopWithSlice(0, postsPerPage)
      });
    
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          value={this.state.q}
          onChange={this.onChange}
        />
        <Content data={this.state.dataShow} {...this.props}/>
        <button
          onClick={() => {
            this.handleShowMorePosts();
          }}
          className="btn btn-warning"
        >
          Load more
        </button>
      </div>
    );
  }
}

import React from "react";
import axios from "axios";

export default class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      Names: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        console.log(Response)
        this.setState({ dataList: Response.data });
      })
      .catch((err) => {
        console.log("Somthing is wrong");
      });
  }

  changeHandler = (evt) => {
    this.setState({
      Names: evt.target.value
    });
  };

  clickHandler = () => {
    var len = this.state.dataList.length + 1;
    //   console.log(len);
    if (this.state.Names !== "") {
      this.setState(
        {
          dataList: [
            ...this.state.dataList,
            { id: len, name: this.state.Names }
          ],
          Names: ""
        },
        () => {
          axios
            .post(
              "https://jsonplaceholder.typicode.com/users",
              this.state.dataList[len - 1]
            )
            .then((Response) => {})
            .catch((err) => {
              console.log("Somthing is wrong in backend");
            });
        }
      );
    }
  };

  render() {
    return (
      
      <div>
        <div>
          <h1  style={{marginLeft:"400px"}} className="title">Digikull Students</h1>
          <h2 style={{marginLeft:"600px"}}>Hello User</h2>
        </div>
        <div className="inputwala">
          <input
          style={{marginLeft:"550px"}}
            type="text"
            placeholder="Add customer name"
            value={this.state.Names}
            onChange={this.changeHandler}
          ></input>
          <button onClick={this.clickHandler}>Add</button>
        </div>
        <div className="uldiv">
          <ul style={{marginLeft:"400px"}}>
            {this.state.dataList.map((item, ind) => {
              return <li key={ind}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
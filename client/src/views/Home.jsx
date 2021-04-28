import React, { Component } from "react";
import UserInfo from "../components/UserInfo";

export default class Home extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          list: res.latest,
        });
      });
  }

  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <div className="flex min-h-screen w-screen">
        <div className="w-2/6 bg-indigo-900 text-white flex justify-center p-5">
          <UserInfo />
        </div>
        <div className="w-4/6">
          <ul className="m-2 flex flex-col gap-3">
            {list.map((l) => {
              return (
                <li className="shadow-md hover:shadow-xl cursor-pointer rounded-lg border-2 hover:border-green-800">
                  <h4 className="text-2xl p-2 pb-3">{l.title}</h4>
                  <p className="p-2">{l.body}</p>
                  <div className="flex justify-between p-2 bg-blue-100 rounded-b-lg">
                    <div>{l.author.name}</div>
                    <div>{l.date}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

// import React from "react";
import { Component } from "react";
import "./App.css";
import Subject from "./components/Subject";
import Content from "./components/Content";
import TOC from "./components/TOC";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "World Wide Web!" }
    };
  }
  render() {
    return (
      <div>
        <Subject title="WEB" sub="world wide web!" />
        <Subject title="React" sub="for UI" />
        <TOC />
        <Content title="HTML" desc="HTML is HyperText Markup Language." />
      </div>
    );
  }
}
export default App;

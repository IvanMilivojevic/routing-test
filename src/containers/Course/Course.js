import React, { Component } from "react";

class Course extends Component {
  render() {
    console.log(this.props);
    const searchParamsUrl = this.props.location.search;
    const searchParams = new URLSearchParams(searchParamsUrl);
    const title = searchParams.get("title");

    return (
      <div>
        <h1>{title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;

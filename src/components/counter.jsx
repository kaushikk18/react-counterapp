import React from "react";

class Counter extends React.Component {
  state = {
    value: this.props.value,
    // name: "kaushik",
    // tags: ["one", "two", "three"],
  };

  //   styles = {
  //     fontSize: 18,
  //     fontWeight: "bold",
  //   };

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    if (this.props.counter.value === 0) {
      classes += "warning";
    } else {
      classes += "primary";
    }
    return classes;
  }

  // getBadgeClasses() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.props.counter.value === 0 ? "warning" : "primary";
  //   return classes;
  // }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;

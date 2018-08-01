import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: 0,
    imgUrl: 'https://picsum.photos/200',
    tags: [ 'abs1', 'abcs2', 'appccd' ]
  };

  constructor () {
    super();

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  renderTags () {
    if (this.state.tags.length === 0) return <p>Ops, you dont have tags exist!</p>;

    return <ul>{ this.state.tags.map((tag, idx) => <li key={idx}>{ tag }</li>)}</ul>;
  };

  // first alternative using constructor to call this
  handleIncrement () {
    this.setState({ value: this.state.value + 1 })
  }

  // second, using arrow function
  handleIncrementSecond = () => {
    console.log('oh snap, i can do like this?', this)
  };

  render() {
    return (
      <div className="mt-3 ml-3">
        <h6>{ this.props.value }</h6>
        <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
        <button 
          onClick={this.handleIncrement} 
          className="btn btn-primary btn-sm ml-2">Increment</button>
        
        <button 
          onClick={() => this.props.onDelete(this.props.id)} 
          className="btn btn-danger btn-sm ml-2">Increment</button>
        {/* <button 
          onClick={this.handleIncrementSecond} 
          className="btn btn-primary btn-sm ml-2">Increment1</button> */}
          
        {/* { this.state.tags.length === 0 && "Create some tags first gaes!!" }
        { this.renderTags() } */}
        
      </div>
    );
  };

  getBadgeClasses () {
    let classes = "badge mt-2 badge-"
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes
  };

  formatCount () {
    const { value } = this.state;
    return value === 0 ? "Zero" : value
  }
 }

export default Counter;
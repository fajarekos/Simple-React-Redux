import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/post-actions';

class PostsForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    // Call actions
    this.props.createPost(post)
  }

  render() {
    return (
      <div className="col-md-8 offset-md-2 mt-5">
        <h3>Add Post</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
                  type="text" 
                  name="title"
                  className="form-control" 
                  onChange={this.onChange}
                  value={this.state.title}
                  placeholder="Title"/>
          </div>

          <div className="form-group">
            <label htmlFor="body">Description</label>
            <textarea 
                  name="body" 
                  className="form-control" 
                  placeholder="Description"
                  onChange={this.onChange}
                  value={this.state.body} 
                  cols="20" rows="4"></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostsForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostsForm);

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/post-actions'

class Posts extends Component {
  componentWillMount () {
    this.props.fetchPosts()
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }
  render() {
    return (
      <div className="col-md-8 offset-md-2">
        { this.props.posts.map(post => (
          <div className="card card-default mb-1 mt-1" key={post.id}>
            <h5>{post.title}</h5>
            <span>{post.body}</span>
          </div>
        ))}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);

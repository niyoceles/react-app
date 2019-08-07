import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTask } from "../actions/index";

class Posts extends Component {
  
  componentWillMount() {
   this.props.fetchTask();
   console.log(this.props.remoteUsers);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.new){
    this.props.remoteUsers.unshift(nextProps.newTask);
    }

  }

  render() {
    const PostItem = this.props.remoteUsers.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        {post.body}
      </div>
    ))
    return (

      <div>
        Posts
        {PostItem}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchTask: PropTypes.func.isRequired,
  Posts: PropTypes.array.isRequired,
};
const mapStateToProps = state =>({
 remoteUsers: state.remoteUsers.items,
});
export default connect(mapStateToProps, {fetchTask})(Posts);
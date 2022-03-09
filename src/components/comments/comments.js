import React, { Component } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';
import './comments.css'
// import classes from  './comments.module.css';

class Comments extends Component {
  state = {
    newComment: '',
    comments: [],
  };

  updateInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  postComment = event => {
    event.preventDefault();
    const { username, newComment } = this.state;
    if (username.trim() === '' || newComment.trim() === '') return;
    
    const data = {
      name: username,
      text: newComment,
      votes: 0,
    };

    axios
      .post('http://localhost:5000/comment', data)
      .then(() => {
        this.setState({
          username: '',
          newComment: '',
        });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    const pusher = new Pusher('<your app key>', {
      cluster: '<your app cluster>',
      encrypted: true,
    });
    
    axios.get('http://localhost:5000').then(({ data }) => {
      this.setState({
        comments: [...data],
      });
    }).catch(error => console.log(error))
    
    const channel = pusher.subscribe('comments');
    channel.bind('new-comment', data => {
      this.setState(prevState => {
        const { comments } = prevState;
        comments.push(data.comment);

        return {
          comments,
        };
      });
    });
  }

  render() {
    const { username, newComment, comments } = this.state;

    const userComments = comments.map(e => (
      <article className="comment" key={e._id}>
        <h1 className="comment-user">{e.name}</h1>
        <p className="comment-text">{e.text}</p>
        <div className="voting">
          <div className="vote-buttons">
            <button className="upvote">
              Upvote
            </button>
            <button className="downvote">
              Downvote
            </button>
          </div>
          <div className="votes">Votes: {e.votes}</div>
        </div>
      </article>
    ));

    return (
      <div className="App">
        <section className="comments-form">
          <form onSubmit={this.postComment}>
            <label htmlFor="username">Name:</label>
            <input
              className="username"
              name="username"
              id="username"
              type="name"
              value={username}
              onChange={this.updateInput}
            />

            <label htmlFor="new-comment">Comment:</label>
            <textarea
              className="comment"
              name="newComment"
              id="new-comment"
              value={newComment}
              onChange={this.updateInput}
            />
            <button type="submit">Have your say</button>
          </form>
        </section>
        <section className="comments-section">{userComments}</section>
      </div>
    );
  }
}

export default Comments;
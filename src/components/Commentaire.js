import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class Commentaire extends React.Component {

    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            characterCount: 0
        }
    }

    handleChange(event){

        this.setState({
            characterCount: event.target.value.length
        })
    }

    render() {
      return (
        <div>
          <textarea className="form-control" placeholder="Write a comment..." onChange={this.handleChange} />
          <small>{this.props.maxLetters - this.state.characterCount} Remaining</small>
        </div>
      )
    }
}
  
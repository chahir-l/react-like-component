import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IconLike from './IconLike'

export class Like extends Component {

    constructor() {
        super()

        this.state = {
            liked: false
        }

        this.toggleLike = this.toggleLike.bind(this)
    }

    toggleLike() {
        this.setState(previousState => ({
            liked: !previousState.liked
        }))
    }

    render() {
        return (
            <div>
                {/* Inclut le sous-composant LikeIcon à l'intérieur du composant Like*/}
                {this.state.liked && <IconLike />}
                <hr />
                <div>
                    <button type="button" className="btn no-outline btn-secondary" onClick={this.toggleLike}>
                        <i
                            className="fa fa-thumbs-o-up fa-4 align-middle"
                            aria-hidden="true"
                        />
                &nbsp;
                <span className="align-middle">Like</span>
                    </button>
                </div>
            </div>
        )
    }
} 
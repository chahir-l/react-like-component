import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Commentaire } from './components/Commentaire';
import { Like } from './components/Like';
import './r.css';

 class Status extends Component
 {

  render(){
    return (
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div class="col-2">
                <img src="https://zen-of-programming.com/react-intro/selfiesquare.jpg" class="profile-pic" />
              </div>
              <div class="col-10 profile-row">
                <div class="row">
                  <a href="#">The Zen of Programming</a>
                </div>
                <div class="row">
                  <small class="post-time">10 mins</small>
                </div>
              </div>
            </div>
            <p>Hello, world!</p>
            <Like />
          </div>
          <div className="card-footer text-muted">
            <Commentaire maxLetters={225} />
          </div>
        </div>
      </div>
    )
  }

 }

 ReactDOM.render(<Status />, document.getElementById('root'))
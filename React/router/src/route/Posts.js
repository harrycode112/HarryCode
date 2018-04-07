import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

class Content extends Component {

    render(){
        return (
            <h2>{this.props.match.params.title} 두번째 라우터</h2>
        )
    }
}

class Posts extends Component {

    render(){
        return (
            <div>
                <h1>Posts</h1>
                <Link to="posts/react">react</Link>
                <Link to="posts/redux">redux</Link>
                <Link to="posts/store">store</Link>
                <Route path="/posts/:title" component={Content}/>
            </div>
        )
    }
}

export default Posts;
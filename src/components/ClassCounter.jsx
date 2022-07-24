import React from "react";

class ClassCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
        this.Like = this.Like.bind(this)
        this.Dislike = this.Dislike.bind(this)
        
    }

    Like(){
        this.setState({count:this.state.count+1})
    }
    Dislike(){
        this.setState({count:this.state.count-1})
    }

    render() {
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.Like}>Like</button>
            <button onClick={this.Dislike}>Dislike</button>
        </div>
        )

    }
}
export default ClassCounter;
import React, { Component } from 'react';
import Avatar from 'react-avatar';
import './../assets/css/topic.css';

let backgroundA = {
    backgroundColor: '#59A6BC'
}

let backgroundE = {
    backgroundColor: '#435054'
}

let backgroundP = {
    backgroundColor: '#86092A'
}

let backgroundR = {
    backgroundColor: '#860969'
}

let backgroundS = {
    backgroundColor: '#343333'
}

let backgroundD = {
    backgroundColor: '#AE20CD'
}

class TopicItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            background: null
        }
    }

    componentWillMount(){
        const description   = this.props.description.toUpperCase();
        const letter        = description.charAt(0);
        if(letter === 'A'){
            this.setState({background: backgroundA})
        } else if(letter === 'E'){
            this.setState({background: backgroundE})
        } else if(letter === 'P'){
            this.setState({background: backgroundP})
        } else if(letter === 'R'){
            this.setState({background: backgroundR})
        } else if(letter === 'S'){
            this.setState({background: backgroundS})
        } else if(letter === 'D'){
            this.setState({background: backgroundD})
        }
    }

    render(props) {
        return (
            <div className="topic-item-container">
                <div className="topic-item" style={this.state.background}>
                    {this.props.description}
                </div>
            </div>
        );
    }
}

export default TopicItem;

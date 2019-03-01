import React, {Component} from "react";
import ListInput from './ListInput';
import ListContent from './ListContent';
import './todolist.css'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
        }
    };

    onListInputSubmit = (value) => {
        const {contents} = this.state;
        contents.push(value);
        this.setState({
            contents: contents,
        })
    };

    onDeleteContent = (index) => {
        const {contents} = this.state;
        contents.splice(index, 1);
        this.setState({
            contents: contents,
        })
    };

    render() {
        const {contents} = this.state;
        return (
            <div className='main'>
                <ListInput onSubmit={this.onListInputSubmit}/>
                <ListContent contents={contents} onDeleteContent={this.onDeleteContent}/>
            </div>
        )
    }
}

export default ToDoList;
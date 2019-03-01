import React, {Component} from "react";
import './todolist.css'

class Content extends Component {
    static defaultProps = {
        content: [],
    };

    handleDeleteContent = () => {
        const {index, onDeleteContent} = this.props;
        if (onDeleteContent) {
            onDeleteContent(index);
        }
    };

    render() {
        const {content} = this.props;
        return (
            <div className='Content'>
                <div>{content}</div>
                <span className='Content_del'
                      onClick={this.handleDeleteContent}>×</span>
            </div>
        )
    }
}

export default Content;
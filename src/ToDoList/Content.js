import React, {Component} from "react";
import './todolist.css'

class Content extends Component {
    static defaultProps = {
        content: '',
    };

    constructor(props){
        super(props);
        this.state={
            value:'',
        }
    }


    handleDeleteContent = () => {
        const {index, onDeleteContent} = this.props;
        if (onDeleteContent) {
            onDeleteContent(index);
        }
    };

    handleEditContent = () => {
        const {index, onEditContent,content} = this.props;
        if(onEditContent){
            onEditContent(index,content);
        }
    };

    render() {
        const {content} = this.props;
        return (
            <div className='Content'>
                <div className='Content_left'>{content}</div>
                <div className='Content_Right'>
                    <span className='Content_addtion'
                          onClick={this.handleEditContent}>修改</span>
                    <span className='Content_addtion'
                           onClick={this.handleDeleteContent}>删除</span>
                </div>
            </div>
        )
    }
}

export default Content;
import React, {Component} from "react";
import Content from './Content';
import './todolist.css'

class ListContent extends Component {

    onDeleteContent = (index) => {
        const {onDeleteContent}=this.props;
        if(onDeleteContent){
            onDeleteContent(index);
        }
    };

    render() {
        const {contents} = this.props;
        return (
            <div className='ListContent'>
                {contents.map((content, i) => {
                    return (
                        <Content index={i}
                                 key={i}
                                 content={content}
                                 onDeleteContent={this.onDeleteContent}/>
                    )
                })}
            </div>
        )
    }
}

export default ListContent;
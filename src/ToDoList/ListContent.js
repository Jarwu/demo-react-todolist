import React, {Component} from "react";
import Content from './Content';
import './index.less'

class ListContent extends Component {

    onDeleteContent = (index) => {
        const {onDeleteContent} = this.props;
        if (onDeleteContent) {
            onDeleteContent(index);
        }
    };

    onEditContent = (index,value) => {
        const {onEditContent} = this.props;
        if (onEditContent) {
            onEditContent(index,value);
        }
    };

    autoContentsList = () => {
        const {contents} = this.props;
        let arr;
        arr = contents.map((content, i) => {
            return (
                <Content index={i}
                         key={i}
                         content={content}
                         onEditContent={this.onEditContent}
                         onDeleteContent={this.onDeleteContent}/>
            )
        });
        return arr;
    };

    render() {
        return (
            <div className='ListContent'>
                {this.autoContentsList()}
            </div>
        )
    }
}

export default ListContent;
import React, {Component} from "react";
import ListInput from './ListInput';
import ListContent from './ListContent';
import ContentDetail from './ContentDetail';
import './index.less'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            content: '',
            index: '',
            show: false,
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

    onEditContent = (index, value) => {
        this.setState({
            content: value,
            index: index,
        });
        this.changModal();
    };

    changModal = () => {
        const {show} = this.state;
        this.setState({
            show: !show,
        })
    };

    saveContent = (value) => {
        const {index, contents} = this.state;
        for (let i = 0; i < contents.length; i++) {

            if (i === index) {
                contents[index] = value;
                this.setState({
                    contents: contents
                });
                break;
            }
        }
        this.changModal();
    };

    render() {
        const {contents, show, content} = this.state;
        const DetailModal = {
            content: content,
        };
        return (
            <div className='main'>
                <ListInput onSubmit={this.onListInputSubmit}/>
                <ListContent contents={contents}
                             onDeleteContent={this.onDeleteContent}
                             onEditContent={this.onEditContent}/>
                {/*模态框是否渲染*/}
                {show &&
                <ContentDetail  {...DetailModal}
                                changModal={this.changModal}
                                saveContent={this.saveContent}/>
                }
            </div>
        )
    }
}

export default ToDoList;
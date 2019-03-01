import React, {Component} from "react";
import './todolist.css'

class ListInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
    }


    handleUsernameChange = (event) => {
        this.setState({
            content: event.target.value
        })
    };

    handleSubmit = () => {

        const {onSubmit} = this.props;
        const {content} = this.state;

        if (onSubmit && content.length !== 0) {
            //传回到父组件
            onSubmit(content);
            //清空
            this.setState(
                {
                    content: '',
                }
            )
        } else {
            alert('请输入至少一个字符！')
        }
    };

    render() {
        const {content} = this.state;
        return (
            <div className='ListInput_main'>
                <textarea className='ListInput_textarea'
                          value={content}
                          onChange={this.handleUsernameChange}/>
                <button className='ListInput_button' onClick={this.handleSubmit}>发布</button>
            </div>
        )
    }
}

export default ListInput;
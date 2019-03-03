import React, {Component} from "react";
import './todolist.css'

class ContentDetail extends Component {
    constructor(props) {
        super(props);

        const {content} = this.props;
        console.log(this.props);

        this.state={
            content:content,
        }
    }

    onChange = (e) => {
        this.setState({
            content: e.target.value,
        })
    };

    onSave = () => {
        const {saveContent} = this.props;
        const {content}=this.state;
        saveContent(content);
    };

    onCancel = () => {
        const {changModal} = this.props;
        changModal();
    };


    render() {
        const {content} = this.state;

        return (
            <div className='ContentDetail'>
                <div className='ContentDetail_main'>
                    <div className='ContentDetail_header'>
                        <span className='ContentDetail_title'>编辑</span>
                        <span className='ContentDetail_titleClose' onClick={this.onCancel}>×</span>
                    </div>
                    <div className='ContentDetail_textareaDiv'>
                        <textarea className='ContentDetail_textarea'
                                  value={content} onChange={this.onChange}/>
                    </div>
                    <div>
                        <button className='ContentDetail_save' onClick={this.onSave}>保存</button>
                        <button className='ContentDetail_cancel' onClick={this.onCancel}>取消</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentDetail;
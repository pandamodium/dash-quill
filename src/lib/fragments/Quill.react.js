import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {defaultProps, propTypes} from '../components/Quill.react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Quill extends Component {
  
    constructor (props) {
        super(props)
        this.state = { editorHtml: '', theme: 'snow' }
        this.handleChange = this.handleChange.bind(this)
      }
      
      handleChange (html) {
          this.setState({ editorHtml: html });
        this.props.setProps({value: html})
      }
      
      handleThemeChange (newTheme) {
        if (newTheme === "core") newTheme = null;
        this.setState({ theme: newTheme })
      }
      
      render () {
        return (
          <div>
            <ReactQuill
              id = {this.props.id} 
              theme={this.state.theme}
              onChange={this.handleChange}
              value={this.state.editorHtml}
              modules={this.props.hasToolbar ? Quill.modules : Quill.modulesNoToolbar}
              formats={Quill.formats}
              bounds={'.app'}
              placeholder={this.props.placeholder}
             />
           </div>
         )
      }
    }
    
/* 
    * Quill modules to attach to editor
    * See https://quilljs.com/docs/modules/ for complete options
    */
Quill.modules = {
    toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
        {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
    ],
    clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
    }
}

Quill.modulesNoToolbar = {
    toolbar: false,
    clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
    }
}

/* 
    * Quill editor formats
    * See https://quilljs.com/docs/formats/
    */
Quill.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]


Quill.defaultProps = defaultProps;
Quill.propTypes = propTypes;
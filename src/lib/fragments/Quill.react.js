import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { defaultProps, propTypes } from '../components/Quill.react';
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

    constructor(props) {
        super(props)
        this.state = { editorHtml: this.props.value, theme: 'snow' }
        this.handleChange = this.handleChange.bind(this)
        this.reactQuillRef = React.createRef();
        this.quillRef = null; // Quill instance
        this.newToolbar = this.props.modules
    }

    handleChange(html, delta, source, editor) {
        console.log('TRIGGERED HANDLECHANGE');
            //if (editor.getLength() < this.props.maxLength) {
        console.log('LENGTH IS GOOD');
        console.log(this.props.value);
        this.setState({ editorHtml: html });
        this.props.setProps({ value: html });
        this.props.setProps({ charCount: editor.getLength() })
            //}
    }

    checkCharacterCount = (event) => {
        console.log('TRIGGERED checkchar');

        const unprivilegedEditor = this.reactQuillRef.current.unprivilegedEditor;
        if (unprivilegedEditor.getLength() > this.props.maxLength && event.key !== 'Backspace')
            event.preventDefault();
    };

    handleThemeChange(newTheme) {
        if (newTheme === "core") newTheme = null;
        this.setState({ theme: newTheme })
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.attachQuillRefs()
    }

    componentDidUpdate() {
        console.log('componentDidMount')
        this.attachQuillRefs()
    }

    attachQuillRefs = () => {

        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        console.log('Triggered GETEDITOR')
        this.quillRef = this.reactQuillRef.getEditor();
    }
    render() {
        return ( < div >
            <
            ReactQuill ref = { this.reactQuillRef }
            id = { this.props.id }
            theme = { this.state.theme }
            onKeyDown = { this.checkCharacterCount }
            onChange = { this.handleChange }
            value = { this.props.value || '' }
            //modules={this.props.hasToolbar ? Quill.modules : Quill.modulesNoToolbar}
            modules = { this.props.modules }
            formats = { Quill.formats }
            bounds = { '.app' }
            placeholder = { this.props.placeholder }
            /> </div >
        )
    }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Quill.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }
        ],
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
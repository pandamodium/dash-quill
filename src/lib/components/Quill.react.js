import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Quill as RealComponent } from '../LazyLoader';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Quill extends Component {
    render() {
        return (
            <React.Suspense fallback={null}>
                <RealComponent {...this.props}/>
            </React.Suspense>
        );
    }
}

Quill.defaultProps = {};

Quill.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     * slateContent={SlateRTE.deserializeHTMLString(value)}
     */
     id: PropTypes.string,

     /**
      * A label that will be printed when this component is rendered.
      */
 //    onChange: PropTypes.func,
 
     hasToolbar: PropTypes.bool,
 
     /**
      * The value displayed in the input.
      */
     value: PropTypes.string,
 
     /**
      * Dash-assigned callback that should be called to report property changes
      * to Dash, to make them available for callbacks.
      */
     setProps: PropTypes.func
 };


export const defaultProps = Quill.defaultProps;
export const propTypes = Quill.propTypes;
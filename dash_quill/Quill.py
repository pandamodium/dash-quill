# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Quill(Component):
    """A Quill component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.
    slateContent={SlateRTE.deserializeHTMLString(value)}.

- charCount (number; optional):
    The number of charaters in the editor (excl HTML).

- maxLength (number; default 140):
    The value displayed in the input.

- modules (dict; default {    toolbar: [    [{ 'font': [] }],    [{size: []}],    ['bold', 'italic', 'underline'],    [{'list': 'ordered'}, {'list': 'bullet'}],    //['link', 'image'],    //['clean']    ],      clipboard: {    // toggle to add extra line breaks when pasting HTML:    matchVisual: False,    }}):
    The toolbar options modules.  Should be {'toolbar':[list of
    options]}.

- value (string; optional):
    The value displayed in the input."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, maxLength=Component.UNDEFINED, charCount=Component.UNDEFINED, modules=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'charCount', 'maxLength', 'modules', 'value']
        self._type = 'Quill'
        self._namespace = 'dash_quill'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'charCount', 'maxLength', 'modules', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Quill, self).__init__(**args)

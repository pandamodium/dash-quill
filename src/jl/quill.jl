# AUTO GENERATED FILE - DO NOT EDIT

export quill

"""
    quill(;kwargs...)

A Quill component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
slateContent={SlateRTE.deserializeHTMLString(value)}
- `charCount` (Real; optional): The number of charaters in the editor (excl HTML)
- `maxLength` (Real; optional): The value displayed in the input.
- `modules` (Dict; optional): The toolbar options modules.
Should be {'toolbar':[list of options]}
- `value` (String; optional): The value displayed in the input.
"""
function quill(; kwargs...)
        available_props = Symbol[:id, :charCount, :maxLength, :modules, :value]
        wild_props = Symbol[]
        return Component("quill", "Quill", "dash_quill", available_props, wild_props; kwargs...)
end


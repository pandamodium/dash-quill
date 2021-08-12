# AUTO GENERATED FILE - DO NOT EDIT

'dre'Quill <- function(id=NULL, charCount=NULL, hasToolbar=NULL, maxLength=NULL, modules=NULL, value=NULL) {
    
    props <- list(id=id, charCount=charCount, hasToolbar=hasToolbar, maxLength=maxLength, modules=modules, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Quill',
        namespace = 'dash_quill',
        propNames = c('id', 'charCount', 'hasToolbar', 'maxLength', 'modules', 'value'),
        package = 'dashQuill'
        )

    structure(component, class = c('dash_component', 'list'))
}

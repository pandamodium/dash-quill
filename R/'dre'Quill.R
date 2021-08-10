# AUTO GENERATED FILE - DO NOT EDIT

'dre'Quill <- function(id=NULL, hasToolbar=NULL, value=NULL) {
    
    props <- list(id=id, hasToolbar=hasToolbar, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Quill',
        namespace = 'dash_quill',
        propNames = c('id', 'hasToolbar', 'value'),
        package = 'dashQuill'
        )

    structure(component, class = c('dash_component', 'list'))
}

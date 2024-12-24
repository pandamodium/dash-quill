% Auto-generated: do not edit by hand
\name{quill}

\alias{quill}

\title{Quill component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
quill(id=NULL, charCount=NULL, maxLength=NULL, modules=NULL,
value=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.
slateContent={SlateRTE.deserializeHTMLString(value)}}

\item{charCount}{Numeric. The number of charaters in the editor (excl HTML)}

\item{maxLength}{Numeric. The value displayed in the input.}

\item{modules}{Named list. The toolbar options modules.
Should be {'toolbar':[list of options]}}

\item{value}{Character. The value displayed in the input.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}


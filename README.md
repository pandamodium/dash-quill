# Dash Quill

A rich text editor component for Dash applications, powered by [Quill.js](https://quilljs.com/). This component enables rich text editing capabilities in your Dash apps with a modern, user-friendly interface.

## Features

- Rich text editing with formatting tools (bold, italic, lists, etc.)
- Real-time content updates
- Customizable toolbar options
- Cross-language support (Python, R, Julia)
- Seamless integration with Dash callbacks
- Lightweight and performant

## Installation

```bash
pip install dash-quill
```

For R:
```R
install.packages("dashQuill")
```

For Julia:
```julia
using Pkg
Pkg.add("DashQuill")
```

## Basic Usage

### Python
```python
from dash import Dash, html
import dash_quill

app = Dash(__name__)

app.layout = html.Div([
    dash_quill.Quill(
        id='editor',
        value='Hello World!',
        placeholder='Start writing...'
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)
```

### R
```R
library(dash)
library(dashQuill)

app <- Dash$new()

app$layout(
    htmlDiv(list(
        dre_quill(
            id='editor',
            value='Hello World!',
            placeholder='Start writing...'
        )
    ))
)

app$run_server()
```

### Julia
```julia
using Dash
using DashQuill

app = dash()

app.layout = html_div() do
    dre_quill(
        id="editor",
        value="Hello World!",
        placeholder="Start writing..."
    )
end

run_server(app)
```

## Component Properties

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| id | string | The ID used to identify this component | required |
| value | string | The editor content as HTML string | "" |
| placeholder | string | Placeholder text when editor is empty | "Compose an epic..." |
| readonly | boolean | Whether to make the editor read-only | false |
| theme | string | Editor theme ("snow" or "bubble") | "snow" |
| modules | dict | Quill modules configuration | default toolbar |

## Development

### Setting Up Development Environment

1. Clone the repository and install dependencies:
```bash
# Install npm packages
npm install

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows

# Install Python dependencies
pip install -r requirements.txt

# Install test dependencies (optional)
pip install -r tests/requirements.txt
```

2. Run the demo app:
```bash
npm run build
python usage.py
```

Visit http://localhost:8050 in your web browser to see the demo.

### Component Development

The main component code is in `src/lib/components/Quill.react.js`. The demo app is in `src/demo/`.

To test your changes:
1. Build the component: `npm run build`
2. Run the demo: `python usage.py`
3. Run tests: `pytest tests/`

### Building for Production

1. Create distribution files:
```bash
npm run build
python setup.py sdist bdist_wheel
```

2. Test the package:
```bash
pip install dist/dash_quill-*.tar.gz
```

3. Publish (if you have access):
```bash
# Upload to PyPI
twine upload dist/*

# Publish to NPM (optional)
npm publish
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on contributing to this project.

## Community

- Report bugs or request features on [GitHub Issues](https://github.com/plotly/dash-quill/issues)
- Get help on the [Dash Community Forum](https://community.plotly.com/c/dash)
- Find more Dash components at [GitHub Topics: plotly-dash](https://github.com/topics/plotly-dash)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

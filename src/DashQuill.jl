
module DashQuill
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.4"

include("jl/dre_quill.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_quill",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-Quill.js",
    external_url = "https://unpkg.com/dash_quill@0.0.4/dash_quill/async-Quill.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-Quill.js.map",
    external_url = "https://unpkg.com/dash_quill@0.0.4/dash_quill/async-Quill.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_quill.min.js",
    external_url = "https://unpkg.com/dash_quill@0.0.4/dash_quill/dash_quill.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_quill.min.js.map",
    external_url = "https://unpkg.com/dash_quill@0.0.4/dash_quill/dash_quill.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end

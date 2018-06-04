import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"

import Form from "react-jsonschema-form";

const log = (type) => console.log.bind(console, type);

export default class AssetDetail extends React.Component {

    constructor(props) {
        super(props)

        const {asset} = props
        var formData = asset

        if (asset) {
            formData._id = {value: asset.assetId}
        }

        this.state = {formData}

    }

    render() {

        if (this.props.schema) {
            return (
                <Form schema={this.props.schema}
                      formData={this.state.formData}
                      onChange={log("changed")}
                      liveValidate={true}
                      onSubmit={this.props.submitAsset}
                      onError={log("errors")}/> )

        } else {
            return (<div/>)
        }
    }
}

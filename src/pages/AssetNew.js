import React from "react";

import {connect} from "react-redux"
import {fetchAsset, createAsset} from "../actions/assetMgmtAction"
import {fetchSchema} from "../actions/schemaActions"

import AssetDetail from "../components/AssetDetail"


function mapStateToProps(store) {
    return {
        assets: store.assets,
        schema: store.schema
    };
}

class AssetNew extends React.Component {

    submitAsset(formData) {
        var asset = Object.assign({}, formData.formData)
        delete asset._id
        this.props.dispatch(createAsset(asset))
    }

    componentWillReceiveProps(newProps) {       //TODO: upgrade to react and use didUpdate
        if (newProps.assets.get('asset_created')) {
            this.props.history.push('/')
        }
    }

    render() {

        return (<div>
                    <h1 className="page-header">Create new asset</h1>
                    <AssetDetail
                        schema={this.props.schema.get('schema')}
                        submitAsset={this.submitAsset.bind(this)}/>
                </div>)
    }
}

export default connect(mapStateToProps)(AssetNew);

import React from "react";

import {connect} from "react-redux"
import {fetchAsset, updateAsset} from "../actions/assetMgmtAction"
import {fetchSchema} from "../actions/schemaActions"

import AssetDetail from "../components/AssetDetail"


function mapStateToProps(store) {
    return {
        assets: store.assets,
        schema: store.schema
    };
}

class AssetDetailWrapper extends React.Component {

    componentDidMount() {
        console.log('mount')
        if (!this.props.schema.get('fetched')) {
            this.props.dispatch(fetchSchema())
        }
        this.props.dispatch(fetchAsset(this.props.match.params.assetId))
    }

    componentWillReceiveProps(newProps) {
        const updated = newProps.assets.get('asset_updated')
        if (updated) {
            console.log('asset updated')
            this.props.history.push('/')
        }
    }

    submitAsset(formData) {
        var asset = Object.assign({}, formData.formData)
        delete asset._id
        this.props.dispatch(updateAsset(asset))
    }

    render() {
        // debugger
        if (this.props.assets.get('asset') && this.props.schema.get('fetched')) { // as the schema load is async, it might not be loaded (fulfilled) before the asset is loaded. We cannot load the assetDetail without the schema.
            return (<div>
                <h1 className="page-header">Asset Detail</h1>
                <AssetDetail
                    asset={this.props.assets.get('asset')}
                    schema={this.props.schema.get('schema')}
                    submitAsset={this.submitAsset.bind(this)}/>
            </div>)
        }
        return <div/>
    }
}

export default connect(mapStateToProps)(AssetDetailWrapper);

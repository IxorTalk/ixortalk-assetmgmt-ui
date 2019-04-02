import React from 'react'

import {connect} from 'react-redux'
import {closeDeleteModal, deleteAsset, deleteModalFor, fetchAssets} from '../actions/assetMgmtAction'
import {fetchSchema} from '../actions/schemaActions'
import {Link} from 'react-router'


import Asset from '../components/Asset'
import DeleteModal from '../components/DeleteModal'
import {
    columns,
    isFetched as isSchemaFetched,
    isFetching as isSchemaFetching
} from "../selectors/schemaSelectors";
import {
    assets,
    error,
    isFetched as isAssetsFetched,
    isFetching as isAssetsFetching
} from "../selectors/assetMgmtSelectors";


function mapStateToProps(store) {
    return {
        // assets: store.assets,
        deleteModal: store.deleteModal,
        schema: store.schema,
        isAssetsFetching: isAssetsFetching(store),
        isAssetsFetched: isAssetsFetched(store),
        assets: assets(store),
        assetsError: error(store),
        isSchemaFetching: isSchemaFetching(store),
        isSchemaFetched: isSchemaFetched(store),
        columns: columns(store),
    }
}

class AssetList extends React.Component {

    state = {columns: null}

    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.fetchAssets()
        if (!this.props.schema.get('fetched')) {
            this.props.dispatch(fetchSchema())
        }
    }

    deleteAsset(assetId) {
        return () => {
            this.props.dispatch(deleteModalFor(assetId))
        }
    }

    async confirmDelete() {
        await this.props.dispatch(deleteAsset(this.props.deleteModal.get('assetToDelete')))
        await this.fetchAssets()
    }

    closeModal() {
        this.props.dispatch(closeDeleteModal())
    }

    fetchAssets() {
        this.props.dispatch(fetchAssets())
    }


    render() {

        const {isSchemaFetching, isSchemaFetched, isAssetsFetching, isAssetsFetched, assetsError} = this.props

        if (isSchemaFetching || isAssetsFetching) {
            return (<div>Loading assets....</div>)
        }

        if (assetsError) {
            const error = this.props.assets.get('error')
            return (<div>Error loading assets due to {error.response.data.message}</div>)
        }

        if (isSchemaFetched && isAssetsFetched) {

            const assets = this.props.assets

            return (

                <div>
                    <div>
                        <h1 className="page-header">Asset Overview</h1>

                        <div className="table-responsive">
                            <table className="table table-striped" width="100%">
                                <thead>
                                <tr>
                                    <th/>
                                    <th>Hostname</th>
                                    {this.props.columns.map((property) =>
                                        <th key={property.key}>{property.label || property.key}</th>
                                    )}
                                </tr>
                                </thead>
                                <tbody>
                                {assets.map(asset =>
                                    <Asset
                                        key={asset.assetId.value}
                                        deleteAsset={this.deleteAsset(asset.assetId)}
                                        asset={asset}
                                        assetProperties={this.props.columns}/>
                                )}
                                </tbody>
                            </table>
                        </div>
                        <DeleteModal
                            show={this.props.deleteModal.get('assetToDelete') !== null}
                            assetId={this.props.deleteModal.assetToDelete}
                            closeModal={this.closeModal.bind(this)}
                            delete={this.confirmDelete.bind(this)}/>
                    </div>


                    <hr/>

                    <button type='button' onClick={() => {
                        this.props.history.push('/new')
                    }}>Add Asset
                    </button>

                </div>
            )

        } else {

            console.log('Schema not fetched with props', this.props)

            return (<div/>)
        }


    }
}

export default connect(mapStateToProps)(AssetList)

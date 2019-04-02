import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { Glyphicon, Button } from 'react-bootstrap'

import { fetchAssets } from "../actions/assetMgmtAction"

export default class Asset extends React.Component {

  render() {

    const { asset,assetProperties } = this.props
    const HOSTNAME = "hostname"

      const assetData = Object.keys(asset.assetProperties.properties)

      const assetTableData = assetProperties.map(({key}) =>
          <td key={key} >{asset.assetProperties.properties[key]}</td>
      )

       return (

    	<tr>
            <td><img src="https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/screenshots/fa3501/fa3501_4.png"/></td>
    		<td><Link to={`/assets/${asset.assetId}`}>{asset.assetProperties.properties[HOSTNAME]}</Link></td>
            {assetTableData }
            <td><Button bsStyle="default" style={{background: 'transparent', border: 'none', outline: 'none'}} onClick={this.props.deleteAsset}>
              <Glyphicon style={{fontSize: '20px'}} glyph="remove-sign"/>
            </Button></td>
    	</tr>
    	)
  }
}

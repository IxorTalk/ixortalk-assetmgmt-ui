import axios from 'axios'

export function fetchAssets() {
  return function (dispatch) {
    axios.get('/assetmgmt/assets?size=500')
      .then((response) => {
        dispatch({type: 'FETCH_ASSETS_FULFILLED', payload: response.data._embedded.assets})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_ASSETS_REJECTED', payload: err})
      })
  }
}

export function fetchAsset(assetId) {
  return {
    type: 'FETCH_ASSET',
    payload: axios.get('/assetmgmt/assets/' + assetId)
  }
}

export function updateAsset(asset) {
  return {
    type: 'UPDATE_ASSET',
    payload: axios.put('/assetmgmt/assets/' + asset.assetId, asset)
  }
}

export function createAsset(asset) {
  return {
    type: 'CREATE_ASSET',
    payload: axios.post('/assetmgmt/assets', asset)
  }
}

export function deleteAsset(assetId) {
  return {
    type: 'DELETE_ASSET',
    payload: axios.delete('/assetmgmt/assets/' + assetId)
  }
}

export function deleteModalFor(assetId) {
  return {
    type: 'DELETE_MODAL_FOR',
    payload: {
      assetId
    }
  }
}

export function closeDeleteModal() {
  return {
    type: 'CLOSE_DELETE_MODAL'
  }
}


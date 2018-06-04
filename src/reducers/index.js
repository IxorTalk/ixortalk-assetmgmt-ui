import { combineReducers } from "redux"

import assets from "./assetMgmtReducer"
import schema from "./schemaReducer"
import deleteModal from "./deleteModalReducer"

export default combineReducers({
  assets,
  schema,
  deleteModal,
})

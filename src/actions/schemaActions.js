import axios from "axios";

export function fetchSchema() {
	return {
		type:"FETCH_SCHEMA",
		payload:axios.get("/assetmgmt/schemas")
	}
}

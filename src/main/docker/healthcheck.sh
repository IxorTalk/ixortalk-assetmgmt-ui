#!/bin/sh

SERVER_CONTEXT_PATH=${SERVER_CONTEXT_PATH:="/assetmgmt-ui"}
HEALTH_PATH=${HEALTH_PATH:="/health"}
PORT=${PORT:="7001"}

wget -q http://localhost:${PORT}${SERVER_CONTEXT_PATH}${HEALTH_PATH} -O /dev/null

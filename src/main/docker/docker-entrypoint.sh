#!/bin/sh

set -e

IXORTALK_PROFILE=${IXORTALK_PROFILE:="dev"}
IXORTALK_CONFIG_SERVER_LABEL=${IXORTALK_CONFIG_SERVER_LABEL:="master"}
IXORTALK_CONFIG_SERVER_URL=${IXORTALK_CONFIG_SERVER_URL:="http://ixortalk-config-server:8899/config"}

rm -rf /etc/nginx/conf.d/default.conf

CONFIG_URL=${IXORTALK_CONFIG_SERVER_URL}/ixortalk.assetmgmt.ui/${IXORTALK_PROFILE}/${IXORTALK_CONFIG_SERVER_LABEL}/assetmgmt-ui.conf
echo "Fetching configuration from $CONFIG_URL"

wget $CONFIG_URL -O /etc/nginx/conf.d/assetmgmt-ui.conf

nginx -g 'daemon off;'

# WRITE GOOGLE CLOUD SERVICE ACCOUNT KEY FILE TO JSON
echo ${KEY_FILE_STRING_JSON}
echo ${KEY_FILE_STRING_JSON} > key.json

# Authorize and set project
gcloud auth activate-service-account --key-file key.json
gcloud config set project ${GCLOUD_PROJECT}

# Mover yaml a carpeta dist
mv app-develop.yaml ./dist/
# Deploy code to App Engine
gcloud app deploy ./dist/app-${CI_ENVIRONMENT_NAME}.yaml
# ${GCLOUD_SDK_BIN}/gcloud app deploy app-${CI_ENVIRONMENT_NAME}.yaml
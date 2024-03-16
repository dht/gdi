#!/bin/bash

# Example: Basic framework for dependency-based build order
# NOTE: This example assumes a simple scenario where you can manually define order
# or have a mechanism to determine it outside of this script.

# Define the build order manually for illustration
# In a real scenario, you'd dynamically determine this based on parsing package.json files
build_order=("shared-base" "saga-ts" "redux-store-generator" "redux-connected" "igrid" "store-iso" "store-base" "gdi-ui" "gdi-auth" "gdi-firebase" "ai-runner" "isokit2" "widgets") # Adjust this according to actual dependency order

cd packages

for pkg in "${build_order[@]}"; do
    if [ -d "$pkg" ]; then
        echo "Building $pkg..."
        cd "$pkg"
        npm run build
        cd ..
    else
        echo "Directory $pkg does not exist."
    fi
done

#!/bin/bash

# Source directory
SRC_DIR="dist"

# Destination directory
DEST_DIR="../../web/dist/landing"

cp -r "$SRC_DIR"/. "$DEST_DIR"

echo "Copy completed successfully."

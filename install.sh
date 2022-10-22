#!/bin/bash

PROJECT_ROOT="$(git rev-parse --show-toplevel)"
BUILD_FOLDER="$PROJECT_ROOT/build"

UUID="clutter-issues@ionutbortis.gmail.com"

PACKAGE_FILE="$BUILD_FOLDER/$UUID.zip"

cleanup() {
  echo "Cleaning build folder..."

  rm -rf "$BUILD_FOLDER" && mkdir -p "$BUILD_FOLDER"
}

create_package() {
  echo "Packing the extension into [ $BUILD_FOLDER ] folder..."

  gnome-extensions pack \
    --force \
    --out-dir="$BUILD_FOLDER" \
    "$PROJECT_ROOT/src"
}

rename_package() {
  mv "$BUILD_FOLDER/$UUID.shell-extension.zip" "$PACKAGE_FILE"

  echo "Package created: $PACKAGE_FILE"
}

install_package() {
  echo "Installing [ $PACKAGE_FILE ] extension package..."

  gnome-extensions install --force "$PACKAGE_FILE"
}

cleanup
create_package
rename_package
install_package

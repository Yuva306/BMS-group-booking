#!/bin/sh
# Serves the prototype at http://localhost:5173 (needs only the Python 3 that ships with macOS).
cd "$(dirname "$0")" && echo "Open http://localhost:5173" && exec python3 -m http.server 5173

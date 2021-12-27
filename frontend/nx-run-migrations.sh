#!/bin/bash

if [ -f migrations.json ]; then
  npx nx migrate --run-migrations=migrations.json
else
  echo "migrations.json not found"
fi

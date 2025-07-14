#!/bin/bash
service marche-nuxt stop
git pull
npx nuxi cleanup
npx nuxi build
service marche-nuxt start

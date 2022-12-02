# Prepare project sturcture
git clone --depth 1  --filter=blob:none  --sparse https://github.com/dht/gdi
cd gdi
git sparse-checkout set clients/gdi-site
git sparse-checkout add clients/gdi-admin
rm -rf .git

cd ..

mv gdi/clients/gdi-admin .
mv gdi/clients/gdi-site .
rm -rf gdi

cd gdi-admin
rm tsconfig.json
mv tsconfig.prod.json tsconfig.json
rm vite.config.js
mv vite.config.prod.js vite.config.js
 
cd ../gdi-site
rm tsconfig.json
mv tsconfig.prod.json tsconfig.json
rm vite.config.js
mv vite.config.prod.js vite.config.js

cd ..

git init
git add .
git checkout -b main
git commit -am "initial commit"

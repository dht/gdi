# Prepare project sturcture
git clone --depth 1  --filter=blob:none  --sparse https://github.com/dht/gdi
cd gdi
git sparse-checkout set clients/gdi-site
git sparse-checkout add clients/gdi-admin
git checkout 3-featcli-support-building-deploying
rm -rf .git

cd ..

mv gdi/clients/gdi-admin .
rm gdi-admin/tsconfig.json
mv gdi-admin/tsconfig.prod.json gdi-admin/tsconfig.json

mv gdi/clients/gdi-site .
rm gdi-site/tsconfig.json
mv gdi-site/tsconfig.prod.json gdi-admin/tsconfig.json

rm -rf gdi

rm install.sh
git init


# Install dependencies
npm install


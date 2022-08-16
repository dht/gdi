git clone \
  --depth 1  \
  --filter=blob:none  \
  --sparse \
  https://github.com/dht/gdi \

cd gdi
git sparse-checkout set clients/gdi-site
git sparse-checkout add clients/gdi-admin
git sparse-checkout add /*.*
npm install

cd web
npm run build
cd ..

cd entries/landing
npm run build
cd ../..

cd entries/docs
npm run build
cd ../..

cd web
firebase deploy --only hosting
cd ..

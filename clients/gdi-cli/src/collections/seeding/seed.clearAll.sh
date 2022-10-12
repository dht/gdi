# shortcuts: seedClearAll
# desc: clears all firestore data
firebase firestore:delete -r -f authState &
firebase firestore:delete -r -f me &
firebase firestore:delete -r -f users &
firebase firestore:delete -r -f roles &
firebase firestore:delete -r -f appStateMixer &
firebase firestore:delete -r -f galleryState &
firebase firestore:delete -r -f widgetGalleryState &
firebase firestore:delete -r -f currentIds &
firebase firestore:delete -r -f libraryWidgets &
firebase firestore:delete -r -f libraryImages &
firebase firestore:delete -r -f libraryTypography &
firebase firestore:delete -r -f libraryPalettes &
firebase firestore:delete -r -f locales &
firebase firestore:delete -r -f packages &
firebase firestore:delete -r -f meta &
firebase firestore:delete -r -f palette &
firebase firestore:delete -r -f fonts &
firebase firestore:delete -r -f instances &
firebase firestore:delete -r -f pages &
firebase firestore:delete -r -f images &
firebase firestore:delete -r -f locale &
firebase firestore:delete -r -f widgets &
firebase firestore:delete -r -f instancesProps &
firebase firestore:delete -r -f singles 

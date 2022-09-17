const fs = require('fs');

const rootNodes = [
    'appStateBiblo',
    'appStateDeb',
    'appStateDevtools',
    'appStateEvents',
    'appStateKnowledge',
    'appStateMixer',
    'appStateMoney',
    'appStatePpl',
    'appStateScheduler',
    'appStateSoundboard',
    'appStateSpotify',
    'appStateStudio',
    'appStateTasks',
    'appStateThings',
    'appStateVoice',
    'authState',
    'widgetGalleryState',
    'galleryState',
    'actualManas',
    'assets',
    'widgets',
    'boards',
    'buildings',
    'cameras',
    'expectedManas',
    'grounds',
    'images',
    'instancesProps',
    'instances',
    'instancesMapColors',
    'instancesMapStrings',
    'items',
    'libraryWidgets',
    'libraryImages',
    'libraryPalettes',
    'libraryTypography',
    'lights',
    'locales',
    'moneyBehaviors',
    'moneyLines',
    'pages',
    'particles',
    'persons',
    'projects',
    'recentSessions',
    'roles',
    'scheduleBlocks',
    'scheduleItems',
    'sessions',
    'tickets',
    'users',
    'weatherDailyItems',
    'weatherHourlyItems',
    'weatherLocations',
    'worklogs',
];

const run = async () => {
    const content = rootNodes
        .map((nodeName) => {
            return `        match /${nodeName}/{document=**} {
            allow read: if isAdmin();
            allow write: if isAdmin();
        }`;
        })
        .join('\n\n');

    fs.writeFileSync('firestore.rules.admin', template(content));
};

const template = (content) => {
    return `rules_version = '2';
service cloud.firestore {
    match /databases/{database}/documents {  	

        function isAdmin() {
            return get(/databases/$(database)/documents/roles/$(request.auth.uid)).data.role == "admin";
        }
        
        match /singles/{name} {
            allow read: if isAdmin();
            allow write: if isAdmin();    
        }

${content}
    }
}
`;
};

run();

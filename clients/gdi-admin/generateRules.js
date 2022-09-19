const fs = require('fs');

const rootNodes = [
    'appStateBiblo',
    'appStateDeb',
    'appStateDevtools',
    'appStateEvents',
    'appStateFactory',
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
    'boards',
    'buildings',
    'breakpoints',
    'cameras',
    'expectedManas',
    'events',
    'grounds',
    'highlights',
    'images',
    'instancesProps',
    'instances',
    'instancesMapColors',
    'instancesMapStrings',
    'interestingReads',
    'layouts',
    'libraryWidgets',
    'libraryImages',
    'libraryPalettes',
    'libraryTypography',
    'lights',
    'linkCategories',
    'links',
    'locales',
    'metaphors',
    'moneyBehaviors',
    'moneyLines',
    'nodes',
    'pages',
    'particles',
    'persons',
    'playback',
    'postAuthors',
    'posts',
    'projects',
    'readCategories',
    'recentSessions',
    'roles',
    'scheduleBlocks',
    'scheduleSessions',
    'sessions',
    'spotifyMe',
    'stores',
    'studioItems',
    'things',
    'tickets',
    'users',
    'weatherDailyItems',
    'weatherHourlyItems',
    'weatherLocations',
    'widgets',
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

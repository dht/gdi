const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(cors());

app.get('/ping', (req: any, res: any) => {
    res.send('pong!');
});

app.post('/saveLibraryBlocks', (req: any, res: any) => {
    console.time('saving');

    const body = req.body;

    fs.writeFileSync(
        '../../packages/gdi-store-mixer/scripts/state.libraryBlocks.ts',
        `export const libraryBlocks = ${JSON.stringify(body, null, 4)};`
    );

    console.timeEnd('saving');

    res.json({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

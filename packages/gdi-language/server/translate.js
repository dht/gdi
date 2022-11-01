const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const child = require('child_process');

const projects = fs.readJsonSync('./projects.json');

const run = async () => {
    Object.values(projects).forEach((project) => {
        const { i18n } = project;

        const cwd = path.resolve(`../../../${project.path}/${i18n}`);

        if (!fs.existsSync(cwd)) {
            console.log(`No i18n folder found for ${project.id}`);
            return;
        }

        const stdio = 'inherit';

        child.spawn('al', ['translate'], {
            cwd,
            stdio,
        });
    });
};

run();

const request = require('supertest');
const fs = require('fs');
const {Pool} = require('pg');
const app = require('../../server.js');

const testSeed = fs.readFileSync(__dirname + '/test_seeds.sql').toString();

const resetTestDB = () => {
    return new Promise (async (res, rej) => {
        try {
            const db = new Pool();
            await db.query(testSeed);
            res('Test DB reset');
        } catch (err) {
            rej(`Test DB could not be reset: ${err}in ${err.file}`);
        };
    });
}

global.request = request;
global.app = app;
global.resetTestDB = resetTestDB;
global.port = process.env.PORT || 5000;
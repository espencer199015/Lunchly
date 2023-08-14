/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("elizabetherlandson1:///lunchly");

db.connect();

module.exports = db;

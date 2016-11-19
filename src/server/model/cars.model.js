/**
 * Created by kaloczidavid on 2016. 11. 19..
 */

let mysql          = require('mysql');
const MYSQL_CONFIG = require('../../../config/mysql.config.json');

let list = callback => {
  const query = `SELECT * FROM cars`;
  let conn    = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('cars list success!');
    } else {
      console.log('cars list error!', err);
    }
    callback({
      data : rows,
      error: err
    });
  });

  conn.end();
};

let get = (id, callback) => {
  const query = `SELECT * FROM cars WHERE id=${id}`;
  let conn    = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('cars get success!');
    } else {
      console.log('cars get error!', err);
    }
    callback({
      data : rows,
      error: err
    });
  });

  conn.end();
};

let add = (data, callback) => {
  const query = `INSERT INTO cars(manufacturer,type, year) 
              VALUES("${data.manufacturer}","${data.type}", ${data.year} )`;
  console.log(query);
  let conn = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('cars add success!', rows);
    } else {
      console.log('cars add error!', err);
    }
    callback({
      data : rows,
      error: err
    });
  });

  conn.end();
};

let update = (id, data, callback) => {
  const query = `UPDATE cars SET
                  manufacturer="${data.manufacturer}",
                  type="${data.type}",
                  year="${data.year}"
                WHERE id=${id}
  `;
  let conn    = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('cars update success!');
    } else {
      console.log('cars update error!', err);
    }
    callback({
      data : rows,
      error: err
    });
  });

  conn.end();
};

let del = (id, callback) => {
  const query = `DELETE FROM cars WHERE id=${id}`;
  let conn    = mysql.createConnection(MYSQL_CONFIG);
  conn.query(query, (err, rows) => {
    if (!err) {
      console.log('cars del success!');
    } else {
      console.log('cars del error!', err);
    }
    callback({
      data : rows,
      error: err
    });
  });

  conn.end();
};

module.exports = {
  list  : list,
  get   : get,
  delete: del,
  add   : add,
  update: update
};
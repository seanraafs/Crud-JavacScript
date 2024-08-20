const db = require("../config");

exports.getHero = (res) => {
  // query data
  const sql = "SELECT * FROM `hero`";

  // execute data
  db.query(sql, (err, result) => {
    if (err) return console.log("error: ", err);

    // response data
    const heroes = {
      title: "MOBILE-LEGEND-LIST",
      data: JSON.parse(JSON.stringify(result)),
    };
    res.render("index", { heroes });
    res.end();
  });
};

exports.getHeroById = (id, res) => {
  const sql = `SELECT * FROM 'hero' WHERE 'hero'.'id' = ${id} `;
  db.query(sql, (err, result) => {
    if (err) return console.log("error", err);

    const hero = {
      title: "DATA HERO BY ID",
      data: JSON.parse(JSON.stringify(result)),
    };
    res.render("index", { hero });
    res.end();
  });
};

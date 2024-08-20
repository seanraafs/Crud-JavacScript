const db = require("../config");

exports.getHero = (res) => {
  // query data
  const sql = "SELECT * FROM `hero`";

  // execute data
  db.query(sql, (err, result) => {
    if (err) return console.log("error: ", err);

    // response data
    const heroes = {
      title: "HERO-MOBILE-LEGEND-LIST",
      data: JSON.parse(JSON.stringify(result)),
    };
    res.render("index", { heroes });
    res.end();
  });
};

exports.getHeroById = (id, res) => {
  const sql = `SELECT * FROM hero WHERE id = ${id} `;
  db.query(sql, (err, result) => {
    if (err) return console.log("error", err);

    const hero = {
      title: "DATA HERO BY ID",
      data: JSON.parse(JSON.stringify(result)),
    };
    res.render("heroDetail", { hero });
    res.end();
  });
};

exports.updateHeroById = (data, res) => {
  const id = data.id;
  const name = data.name;
  const role = data.role;

  const sql = `UPDATE hero SET name = '${name}', role = '${role}' WHERE id = '${id}'`;
  db.query(sql, (err, result) => {
    if (err) return console.log("error", err);
    res.redirect("/hero");
    res.end();
  });
};

exports.addHero = (data, res) => {
  const name = data.name;
  const role = data.role;

  const sql = `INSERT INTO hero (name, role) VALUES ('${name}', '${role}')`;
  db.query(sql, (err, result) => {
    if (err) return console.log("error", err);
    res.redirect("/hero");
    res.end();
  });
};

exports.removeHero = (id, res) => {
  const sql = `DELETE FROM hero WHERE id='${id}'`;

  db.query(sql, (err, result) => {
    if (err) return console.log("error", err);
    res.redirect("/hero");
    res.end();
  });
};

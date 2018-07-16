exports.up = function(knex, Promise) {
  return knex.schema.createTable("follows", tbl => {
    tbl.integer("user_id").references("users.id");
    tbl.integer("follower_id").references("users.id");
    tbl.unique(["user_id", "follower_id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("follows");
};

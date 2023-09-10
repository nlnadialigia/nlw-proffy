import {Knex} from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("connections", table => {
    table.increments("id").primary(),

    table.integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    
    table.timestamp("created_at", {precision: 6})
      .defaultTo(knex.fn.now())
      .notNullable();
  });
}

export async function down(knex: Knex) {
  knex.schema.dropTable("connections");
}
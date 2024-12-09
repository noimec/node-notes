// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "postgres",
  },
  migrations: {
    directory: "./migrations",
  },
  // seeds: {
  //   directory: './seeds',
  // },
};

import path from 'path'

module.exports = {

  development: {
    client: "mysql2",
    connection: {
      host: process.env.HOST_DB,
      user: process.env.USER_DB,
      password: process.env.PASS_DB,
      database: process.env.NAME_DB,
      port: process.env.PORT_DB
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
  },

  test: {
    client: "mysql2",
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'teste',
      port: 3306
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
  },
};

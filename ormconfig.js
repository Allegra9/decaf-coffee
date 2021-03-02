module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres_user',
  password: 'postgres_pass',
  database: 'core',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

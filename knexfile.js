module.exports = {
    //RDBMS
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
    filename: "./data/database_file.db3",
    },
    migrations: {
    directory: './data/mig/rations'
    },
    seeds: {
    directory: './seeds'
    }
    }
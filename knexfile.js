module.exports = {
    cient: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: "./data/database_file.db3", 
    },
    migrations: {
        directory: './data/migrations'
    }, 
    seeds: {
        directory: './seeds'
    }
}
// Update with your config settings.

module.exports = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/carDealer.db3'
    },
    migrations: {
      tableName: './data/migrations'
    }, 
    seeds: {
        directory: './seeds'
    }
  
};

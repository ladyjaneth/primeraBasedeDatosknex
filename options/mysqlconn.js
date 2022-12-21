const options = {
    client: 'mysql',
    connection:{
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tareabd',

    }
}

const optionsSqlite = {
    client: 'sqlite3',
    connection:{
        filename:'../db/ecommerce.sqlite'
    },
    useNullAsDefault: true
}



module.exports={
    options
}
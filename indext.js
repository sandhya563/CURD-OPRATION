const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'Sandhya@563',
        database: 'sandy'
    }
});
// this knex qureie for inserting data in tha database 
knex('students').insert({ id: 3, name: 'sudha', description: 'navgurukul' })
    .then((data) => {
        console.log(data, 'data inserted')
    }).catch((error) => {
        console.log(error, 'error')
    })
// read the data from the database to get data
knex.select('*').from('user')
    .then((data) => {
        // console.log(data);
    })
    .catch((err) => {
        // console.log(err);
    })
// update the data from the database
knex.update({ id: 1, name: 'anchal', description: 'delhi' })
    .table('students').where("id", 1).then((data) => {
        // console.log("data is updated");
    }).catch((err) => {
        // console.log("not updatate")
    })
knex('students').where('id',1).del()
    .then((data) => {
        // console.log('deleted the data');
    }).catch((err) => {
        // console.log('not delete');
    })


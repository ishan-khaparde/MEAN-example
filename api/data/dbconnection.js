var dbConnection = null

var openConnection = function(){
    //Initialise the dbConnection

}

var getConnection = function(){
    return dbConnection;
}

module.exports = {
    dbConnection : dbConnection,
    getConnection : getConnection
};
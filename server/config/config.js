const path = require("path");
const rootPath = path.normalize(__dirname + "/../../");

module.exports = {
    development:{
        db:"mongodb://localhost/room-App",
        rootPath:rootPath,
        port:process.env.PORT||9000
    }
};
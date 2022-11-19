const mongoose = require('mongoose');

const {MONGODB_URL} = process.env ;

exports.connect = () => {
mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
        .then(console.log(`DB conneted suceessfully`))
        .catch((error) => {
            console.log(`DB connection ERR`);
            console.log(error);
            process.exit(1);
        })

}
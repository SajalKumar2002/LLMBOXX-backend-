const { createConnection } = require('./config/SQLconnection.js');

const JOB = require('./SQLmodel/job.model.js')
const USER = require('./SQLmodel/user.model.js')
const MODEL = require('./SQLmodel/model.model.js')

const importData = async () => {
    try {
        await JOB.destroy();
        await USER.destroy();
        await MODEL.destroy();

        const createdUsers = await USER.create({
            email: "admin@gmail.com",
            password: "password"
        });
        const adminUser = createdUsers.id;

        const models = [
            {
                model_name: 
                base_model:
            }
        ]

        const sampleModel = models.map((model) => {
            return { ...model, user: adminUser };
        });
        // console.log(sampleProducts);
        await MODEL.bulkCreate(sampleModel);

        console.log("Data Imported");
        process.exit();
    } catch (error) {
        console.error(`${error.message}`);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await JOB.destroy();
        await USER.destroy();
        await MODEL.destroy();

        console.log("Data Destroyed!");
        process.exit();
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}
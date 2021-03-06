import Sequelize from 'sequelize';
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';


import databaseConfg from '../config/database';

const models = [User, File, Appointment];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfg);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
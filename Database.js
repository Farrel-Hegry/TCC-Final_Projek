import { Sequelize } from "sequelize";

//DATABASE 1
export const db = new Sequelize('db_proyek1','root','',{
        host: 'localhost',
        dialect: 'mysql'
    });

//DATABASE 2
export const db2 = new Sequelize('db_proyek2','root','',{
        host: 'localhost',
        dialect: 'mysql'
    });
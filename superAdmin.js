'use strict';

module.exports = (sequelize, Sequelize) => {
    let SuperAdmin = sequelize.define('superAdmin',
        {
            superAdminID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            emailID: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            firstName: {
                type: Sequelize.STRING,
            },
            lastName: {
                type: Sequelize.STRING,
            },
            profilePictureUrl: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            enable: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            delete: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
        },
        {
            indexes: [
                {
                    name: 'superAdminID_index',
                    method: 'BTREE',
                    fields: ['superAdminID']
                }
            ]
        });

    SuperAdmin.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // SuperAdmin.sync();
    return SuperAdmin;
};
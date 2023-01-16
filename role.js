'use strict';

module.exports = (sequelize, Sequelize) => {
    let Role = sequelize.define('role',
        {
            roleID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            roleName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            roleDescription: {
                type: Sequelize.STRING,
                allowNull: false,
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
                    name: 'roleID_index',
                    method: 'BTREE',
                    fields: ['roleID']
                }
            ]
        });

    Role.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // Role.sync();
    return Role;
};
'use strict';

module.exports = (sequelize, Sequelize) => {
    let Permission = sequelize.define('permission',
        {
            permissionID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            permissionName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            permissionDescription: {
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
                    name: 'permissionID_index',
                    method: 'BTREE',
                    fields: ['permissionID']
                }
            ]
        });

    Permission.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // Permission.sync();
    return Permission;
};
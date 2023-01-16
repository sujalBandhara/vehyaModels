'use strict';

module.exports = (sequelize, Sequelize) => {
    let RolePermission = sequelize.define('rolePermission',
        {
            rolePermissionID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            roleID: {
                type: Sequelize.UUID,
                references: {
                    model: 'roles',
                    key: 'roleID'
                }
            },
            permissionID: {
                type: Sequelize.UUID,
                references: {
                    model: 'permissions',
                    key: 'permissionID'
                }
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
                    name: 'rolePermissionID_index',
                    method: 'BTREE',
                    fields: ['rolePermissionID']
                }
            ]
        });

    RolePermission.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // RolePermission.sync();
    return RolePermission;
};
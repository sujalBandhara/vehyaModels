'use strict';

module.exports = (sequelize, Sequelize) => {
    let Designation = sequelize.define('designation',
        {
            designationID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            designationName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            designationDescription: {
                type: Sequelize.STRING,
            },
            imageUrl: {
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
            order: {
                type: Sequelize.INTEGER,
            },
        },
        {
            indexes: [
                {
                    name: 'designationID_index',
                    method: 'BTREE',
                    fields: ['designationID']
                }
            ]
        });

    Designation.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // Designation.sync();
    return Designation;
};
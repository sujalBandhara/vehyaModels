'use strict';

module.exports = (sequelize, Sequelize) => {
    let State = sequelize.define('state',
        {
            stateID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            countryName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            stateName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            stateDescription: {
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
                    name: 'stateID_index',
                    method: 'BTREE',
                    fields: ['stateID']
                }
            ]
        });

    State.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // State.sync();
    return State;
};
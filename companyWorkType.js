'use strict';

module.exports = (sequelize, Sequelize) => {
    let CompanyWorkType = sequelize.define('companyWorkType',
        {
            companyWorkTypeID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            companyWorkTypeName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            companyWorkTypeDescription: {
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
                    name: 'companyWorkTypeID_index',
                    method: 'BTREE',
                    fields: ['companyWorkTypeID']
                }
            ]
        });

    CompanyWorkType.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // CompanyWorkType.sync();
    return CompanyWorkType;
};
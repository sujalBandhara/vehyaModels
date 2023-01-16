'use strict';

module.exports = (sequelize, Sequelize) => {
    let Brand = sequelize.define('brand',
        {
            brandID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            brandName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            brandDescription: {
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
                    name: 'brandID_index',
                    method: 'BTREE',
                    fields: ['brandID']
                }
            ]
        });

    Brand.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // Brand.sync();
    return Brand;
};
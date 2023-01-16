'use strict';

module.exports = (sequelize, Sequelize) => {
    let Certification = sequelize.define('certification',
        {
            certificationID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            certificationName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            certificationDescription: {
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
                    name: 'certificationID_index',
                    method: 'BTREE',
                    fields: ['certificationID']
                }
            ]
        });

    Certification.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // Certification.sync();
    return Certification;
};
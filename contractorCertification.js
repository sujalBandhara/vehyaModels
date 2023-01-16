'use strict';

module.exports = (sequelize, Sequelize) => {
    let ContractorCertification = sequelize.define('contractorCertification',
        {
            contractorCertificationID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            certificationID: {
                type: Sequelize.UUID,
                references: {
                    model: 'certifications',
                    key: 'certificationID'
                }
            },
            contractorID: {
                type: Sequelize.UUID,
                references: {
                    model: 'contractors',
                    key: 'contractorID'
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
                    name: 'contractorCertificationID_index',
                    method: 'BTREE',
                    fields: ['contractorCertificationID']
                }
            ]
        });


    ContractorCertification.associate = (models) => {

        ContractorCertification.belongsTo(models.certification, { foreignKey: 'certificationID', onDelete: 'cascade' });
    };

    ContractorCertification.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // ContractorCertification.sync();
    return ContractorCertification;
};
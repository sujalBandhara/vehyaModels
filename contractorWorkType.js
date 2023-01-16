'use strict';

module.exports = (sequelize, Sequelize) => {
    let ContractorWorkType = sequelize.define('contractorWorkType',
        {
            contractorWorkTypeID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            companyWorkTypeID: {
                type: Sequelize.UUID,
                references: {
                    model: 'companyWorkTypes',
                    key: 'companyWorkTypeID'
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
                    name: 'contractorWorkTypeID_index',
                    method: 'BTREE',
                    fields: ['contractorWorkTypeID']
                }
            ]
        });

    ContractorWorkType.associate = (models) => {

        ContractorWorkType.belongsTo(models.companyWorkType, { foreignKey: 'companyWorkTypeID', onDelete: 'cascade' });
    };

    ContractorWorkType.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // ContractorWorkType.sync();
    return ContractorWorkType;
};
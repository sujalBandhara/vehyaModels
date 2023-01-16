'use strict';

module.exports = (sequelize, Sequelize) => {
    let ContractorInsurance = sequelize.define('contractorInsurance',
        {
            contractorInsuranceID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            contractorID: {
                type: Sequelize.UUID,
                references: {
                    model: 'contractors',
                    key: 'contractorID'
                }
            },
            generalLiabilityAmount: {
                type: Sequelize.DECIMAL(20, 2),
                allowNull: false,
            },
            autoLiabilityAmount: {
                type: Sequelize.DECIMAL(20, 2),
                allowNull: false,
            },
            workManCompAmount: {
                type: Sequelize.DECIMAL(20, 2),
                allowNull: false,
            },
            insuranceCompany: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            insuranceAddress: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            insurancePhone: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            insuranceAgent: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            insuranceEmail: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            insuranceAccordUploadURL: {
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
                    name: 'contractorInsuranceID_index',
                    method: 'BTREE',
                    fields: ['contractorInsuranceID']
                }
            ]
        });

    ContractorInsurance.associate = (models) => {
        ContractorInsurance.belongsTo(models.contractor, { foreignKey: 'contractorID' });
    };

    ContractorInsurance.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // ContractorInsurance.sync();
    return ContractorInsurance;
};
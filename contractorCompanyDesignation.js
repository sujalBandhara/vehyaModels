'use strict';

module.exports = (sequelize, Sequelize) => {
    let ContractorCompanyDesignation = sequelize.define('contractorCompanyDesignation',
        {
            contractorCompanyDesignationID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            designationID: {
                type: Sequelize.UUID,
                references: {
                    model: 'designations',
                    key: 'designationID'
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
                    name: 'contractorCompanyDesignationID_index',
                    method: 'BTREE',
                    fields: ['contractorCompanyDesignationID']
                }
            ]
        });

    ContractorCompanyDesignation.associate = (models) => {
        ContractorCompanyDesignation.belongsTo(models.designation, { foreignKey: 'designationID', onDelete: 'cascade' });
    };

    ContractorCompanyDesignation.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // ContractorCompanyDesignation.sync();
    return ContractorCompanyDesignation;
};
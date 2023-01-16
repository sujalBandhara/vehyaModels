'use strict';

module.exports = (sequelize, Sequelize) => {
    let ContractorCompanyBrand = sequelize.define('contractorCompanyBrand',
        {
            contractorCompanyBrandID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            brandID: {
                type: Sequelize.UUID,
                references: {
                    model: 'brands',
                    key: 'brandID'
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
                    name: 'contractorCompanyBrandID_index',
                    method: 'BTREE',
                    fields: ['contractorCompanyBrandID']
                }
            ]
        });

    ContractorCompanyBrand.associate = (models) => {
        ContractorCompanyBrand.belongsTo(models.brand, { foreignKey: 'brandID', onDelete: 'cascade' });
    };

    ContractorCompanyBrand.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // ContractorCompanyBrand.sync();
    return ContractorCompanyBrand;
};
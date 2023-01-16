'use strict';

module.exports = (sequelize, Sequelize) => {
    let ContractorPayment = sequelize.define('contractorPayment',
        {
            contractorPaymentID: {
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
            paymentBankName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            paymentBankAddress: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            paymentBankPhone: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            paymentRoutingNumber: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            paymentBankAccountNumber: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            paymentEIN: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            paymentCompanyPOC: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            paymentW9Upload: {
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
                    name: 'contractorPaymentID_index',
                    method: 'BTREE',
                    fields: ['contractorPaymentID']
                }
            ]
        });

    ContractorPayment.associate = (models) => {
        ContractorPayment.belongsTo(models.contractor, { foreignKey: 'contractorID' });
    };

    ContractorPayment.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // ContractorPayment.sync();
    return ContractorPayment;
};
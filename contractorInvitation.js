'use strict';

module.exports = (sequelize, Sequelize) => {
    let ContractorInvitation = sequelize.define('contractorInvitation',
        {
            contractorInvitationID: {
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
            emailID: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            invitationCode: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            invitationCodeType: {
                type: Sequelize.ENUM("CONTRACTOR","ELECTRICIAN"),
            },
            createdBy: {
                type: Sequelize.UUID,
            },
            updatedBy: {
                type: Sequelize.UUID,
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
                    name: 'contractorInvitationID_index',
                    method: 'BTREE',
                    fields: ['contractorInvitationID']
                }
            ]
        });

    ContractorInvitation.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // ContractorInvitation.sync();
    return ContractorInvitation;
};
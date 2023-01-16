'use strict';

module.exports = (sequelize, Sequelize) => {
    let Electrician = sequelize.define('electrician',
        {
            electricianID: {
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
            invitationCode: {
                type: Sequelize.STRING,
                unique: true,
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            lastName: {
                type: Sequelize.STRING,
            },
            phone: {
                type: Sequelize.STRING,
            },
            homeAddress: {
                type: Sequelize.STRING,
            },
            zipcode: {
                type: Sequelize.INTEGER,
            },
            profilePictureUrl: {
                type: Sequelize.STRING,
            },


            organizationLabourStatus: {
                type: Sequelize.STRING,
            },
            organizationLabourStatusOtherValue: {
                type: Sequelize.STRING,
            },
            areaOfExperties: {
                type: Sequelize.STRING,
            },
            certification: {
                type: Sequelize.STRING,
            },
            certifiedBrand: {
                type: Sequelize.STRING,
            },
            designation: {
                type: Sequelize.STRING,
            },
            electricalLicenseStateID: {
                type: Sequelize.UUID,
                references: {
                    model: 'states',
                    key: 'stateID'
                }
            },
            electricalLicenseNumber: {
                type: Sequelize.STRING,
            },
            electricalLicenseExpirationDate: {
                type: Sequelize.DATE,
            },
            electricalLicenseImageUrl: {
                type: Sequelize.STRING,
            },
            driverLicenseStateID: {
                type: Sequelize.UUID,
                references: {
                    model: 'states',
                    key: 'stateID'
                }
            },
            driverLicenseNumber: {
                type: Sequelize.STRING,
            },
            driverLicenseExpirationDate: {
                type: Sequelize.DATE,
            },
            driverLicenseImageUrl: {
                type: Sequelize.STRING,
            },
            confirmationStatus: {
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
                    name: 'electricianID_index',
                    method: 'BTREE',
                    fields: ['electricianID']
                }
            ]
        });

    Electrician.associate = (models) => {
        Electrician.belongsTo(models.state, { as: 'electricalLicenseState', foreignKey: 'electricalLicenseStateID', onDelete: 'cascade' });
        Electrician.belongsTo(models.state, { as: 'driverLicenseState', foreignKey: 'driverLicenseStateID', onDelete: 'cascade' });
        Electrician.belongsTo(models.state, { as: 'contractor', foreignKey: 'contractorID', onDelete: 'cascade' });
    };

    Electrician.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // Electrician.sync({ alter: true })
    // Electrician.sync();
    return Electrician;
};
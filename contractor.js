'use strict';

module.exports = (sequelize, Sequelize) => {
    let Contractor = sequelize.define('contractor',
        {
            contractorID: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
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
            companyName: {
                type: Sequelize.STRING,
            },
            companyAddress: {
                type: Sequelize.STRING,
            },
            companyEmail: {
                type: Sequelize.STRING,
                unique: true,
            },
            companyPhone: {
                type: Sequelize.STRING,
            },
            companyWebsite: {
                type: Sequelize.STRING,
            },
            companyLogoUrl: {
                type: Sequelize.STRING,
            },
            companyOrganizationLabourStatus: {
                type: Sequelize.STRING,
            },
            companyOrganizationLabourStatusOtherValue: {
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
            password: {
                type: Sequelize.STRING,
            },
            confirmationStatus: {
                type: Sequelize.STRING,
            },
            profilePictureUrl: {
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
                    name: 'contractorID_index',
                    method: 'BTREE',
                    fields: ['contractorID']
                }
            ]
        });

    Contractor.associate = (models) => {

        Contractor.belongsTo(models.state, { as: 'electricalLicenseState', foreignKey: 'electricalLicenseStateID', onDelete: 'cascade' });
        Contractor.belongsTo(models.state, { as: 'driverLicenseState', foreignKey: 'driverLicenseStateID', onDelete: 'cascade' });
        Contractor.hasMany(models.contractorWorkType, { as: 'companyWorkTypes', foreignKey: 'contractorID' });
        Contractor.hasMany(models.contractorCertification, { as: 'certifications', foreignKey: 'contractorID' });
        Contractor.hasMany(models.contractorCompanyBrand, { as: 'brands', foreignKey: 'contractorID' });
        Contractor.hasMany(models.contractorCompanyDesignation, { as: 'designations', foreignKey: 'contractorID' });
        Contractor.hasMany(models.contractorInsurance, { as: 'insurances', foreignKey: 'contractorID' });
        Contractor.hasMany(models.contractorPayment, { as: 'payments', foreignKey: 'contractorID' });
        Contractor.hasMany(models.electrician, { as: 'electrician', foreignKey: 'electricianID' });
    };

    Contractor.prototype.toWeb = (pw) => {
        let json = this.toJSON();
        return json;
    };
    // Contractor.sync();
    return Contractor;
};
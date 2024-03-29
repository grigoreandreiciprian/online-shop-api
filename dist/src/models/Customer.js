"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Custumer extends sequelize_1.Model {
    }
    ;
    Custumer.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to email'
                },
                notEmpty: {
                    msg: 'Provide a value to email'
                },
            },
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to password'
                },
                notEmpty: {
                    msg: 'Provide a value to password'
                },
            },
        },
        fullName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to full name'
                },
                notEmpty: {
                    msg: 'Provide a value to full name'
                },
            },
        },
        streetAdress: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to street adress'
                },
                notEmpty: {
                    msg: 'Provide a value to street adress'
                },
            },
        },
        province: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to province'
                },
                notEmpty: {
                    msg: 'Provide a value to province'
                },
            },
        },
        city: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to city'
                },
                notEmpty: {
                    msg: 'Provide a value to city'
                },
            },
        },
        postalCode: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to postal code'
                },
                notEmpty: {
                    msg: 'Provide a value to postal code'
                },
            },
        },
        country: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to country'
                },
                notEmpty: {
                    msg: 'Provide a value to country'
                },
            },
        },
        phone: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to  phone'
                },
                notEmpty: {
                    msg: 'Provide a value to phone'
                },
            },
        },
        // picture: {
        //     type: DataTypes.BLOB("long")
        // }
    }, {
        sequelize: sequelize,
        tableName: "costumers",
        createdAt: false,
        timestamps: false,
    });
    return Custumer;
};
//# sourceMappingURL=Customer.js.map
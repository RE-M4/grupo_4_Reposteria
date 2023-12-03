/** MODELO DE USUARIO */
module.exports = function(sequelize, DataTypes){

    let alias = 'User'
    
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: true,
            unique: true
        },
        home: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        user_password: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        category: {
            type: DataTypes.STRING(5),
            allowNull: true
        },
        image: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    }

    let config = {
        timestamps: false,
        tableName: 'users'
    }

    const User = sequelize.define(alias, cols, config);
    
    User.associate = function(models) {
        User.hasOne(models.Shopcart, {
            as: 'shopcart',
        })
        User.belongsToMany(models.Product, {
            as: 'products',
            through: 'users_products',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }

    return User; 
}
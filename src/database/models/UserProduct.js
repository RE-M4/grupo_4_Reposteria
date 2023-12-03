/** MODELO DE USUARIO-PRODUCTO */
module.exports = function(sequelize, DataTypes) {

    let alias = 'UserProduct'

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            references: {
                model: 'Product',
                key: 'id'
            }
        }
    }

    let config = {
        timestamps: false,
        tablename: 'users_products'
    }

    const UserProduct = sequelize.define(alias, cols, config);

    UserProduct.associate = function(models) {
        UserProduct.belongsTo(models.User, {
            foreignKey: 'user_id'
        })
        UserProduct.belongsTo(models.Product, {
            foreignKey: 'product_id'
        })  
    }
    
    return UserProduct;
}
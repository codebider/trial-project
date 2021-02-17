export default {
    up: async (queryInterface, Sequelize) => {
        await queryInterface
            .createTable('Documents', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                userId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: { model: 'Users', key: 'id' }
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                phoneNumber: {
                    type: Sequelize.STRING,
                    allowNull: true
                },
                address: {
                    type: Sequelize.STRING,
                    allowNull: true
                },
                ktpNumber: {
                    type: Sequelize.STRING,
                    allowNull: true
                },
                npwpNumber: {
                    type: Sequelize.STRING,
                    allowNull: true
                },
                passportNumber: {
                    type: Sequelize.STRING,
                    allowNull: true
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            })
            .then(() => queryInterface.addIndex('Documents', ['userId', 'npwpNumber']))
            .then(() => queryInterface.addIndex('Documents', ['userId', 'ktpNumber']));
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('Documents');
    }
};

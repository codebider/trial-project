export default {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Documents', 'deletedAt', {
            type: Sequelize.DATE,
            allowNull: true,
            validate: {}
        });
    },

    down: async (queryInterface) => {
        await queryInterface.removeColumn('Documents', 'deletedAt');
    }
};

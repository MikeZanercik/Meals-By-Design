'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('DayMeals', [{
      DayId: 1,
      MealId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      DayId: 1,
      MealId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('DayMeals', null, {});
  }
};

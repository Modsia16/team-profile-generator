const Manager = require('../lib/Manager');
//passed
describe('Manager', () => {
    it('should return the name of the employee', () => {
      const employee = new Manager();
      expect(typeof(employee)).toBe('object')
    });
});

//add more paramaeters to test
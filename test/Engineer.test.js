const Engineer = require('../lib/Engineer');
//passed
describe('Engineer', () => {
    it('should return the name of the employee', () => {
      const employee = new Engineer();
      expect(typeof(employee)).toBe('object')
    });
});

//add more paramaeters to test

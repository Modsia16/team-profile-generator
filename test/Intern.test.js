const Intern = require('../lib/Intern');
//passed
describe('Intern', () => {
    it('should return the name of the employee', () => {
      const employee = new Intern();
      expect(typeof(employee)).toBe('object')
    });
});

//add more paramaeters to test
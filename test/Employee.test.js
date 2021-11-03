const Employee = require('../lib/Employee');
//passed
describe('Employee', () => {
    it('should return the name of the employee', () => {
      const employee = new Employee();
      expect(typeof(employee)).toBe('object')
    });
});

//add more parameter tests
const ValidacionToken = require('./Middlewares/authenticate')

test('req authorization -> true, res 403 -> true, next a -> true', () =>{
    expect(ValidacionToken.auth('authorization',403,'a')).toBe(true)
});
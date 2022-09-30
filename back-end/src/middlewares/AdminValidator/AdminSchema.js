const { z } = require('zod');
const registerSchema = require('../ComonRegisterValidator/RegisterSchema');

// Tirei esse errorMap daqui https://github.com/colinhacks/zod/issues/580
const createUserSchema = registerSchema.extend({
    role: z.enum(['administrator', 'seller', 'customer'], {
        errorMap: () => ({ message: 'role must be administrator, seller or customer' }),
    }),
});

module.exports = createUserSchema;
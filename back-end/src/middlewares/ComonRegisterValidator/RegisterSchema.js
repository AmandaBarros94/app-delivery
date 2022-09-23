const { z } = require('zod');

const registerSchema = z.object({
    name: z.string({
        requiredError: 'name is required',
        invalidTypeError: 'name must be a string',
    })
    .min(12, { message: 'name must be at least 12 characters' }),

    email: z.string({
        requiredError: 'email is required',
        invalidTypeError: 'email must be a string',
    })
    .email({ message: 'You must provide a valid email address' }),
    
    password: z.string({
        requiredError: 'password is required',
        invalidTypeError: 'password must be a string',
    })
    .min(6, { message: 'Password must be at least 6 characters' }), 
});

module.exports = registerSchema;
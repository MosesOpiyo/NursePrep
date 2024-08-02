import * as z from 'zod';

export const contactSchema = z.object ({
    email: z.string().email({
        message: 'Enter a valid email address'
    }),

    name: z.string().min(1, {
        message: 'Enter a name'
    }),

    text: z.string().min(1, {
        message: 'Enter a message / question'
    })
})
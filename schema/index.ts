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

export const RegisterSchema = z.object ({
    email: z.string().email({
        message: 'Enter a valid email address'
    }),

    name: z.string().min(1, {
        message: 'Enter a name'
    }),

    password: z.string().min(6, {
        message: 'Password must be atleast 6 characters long'
    }),

    confirmPassword: z.string().min(6, {
        message: 'Password must be atleast 6 characters long'
    }),

    paymentOption: z.enum(["paypal", "credit_card"], {
        message: "You need to select a notification type.",
    }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password confirmation does not match",
  });
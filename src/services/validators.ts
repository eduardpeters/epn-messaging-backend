import Joi from 'joi';
import type { RegisterBody, LoginBody } from '../epn.d.ts';

const usernameSchema = Joi.string().min(6).max(50).required();
const passwordSchema = Joi.string().min(6).max(255).required;

export function validateRegisterBody(body: RegisterBody) {
    const schema = Joi.object({
        username: usernameSchema,
        password: passwordSchema,
        confirmPassword: passwordSchema
    });
    return schema.validate(body);
}

export function validateLoginBody(body: LoginBody) {
    const schema = Joi.object({
        username: usernameSchema,
        password: passwordSchema,
    });
    return schema.validate(body);
}
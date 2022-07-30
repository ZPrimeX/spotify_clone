import prisma from '../lib/prisma'
import bcrypt from 'bcrypt'
// sign up
// username
// email
// password

const saltRounds = 10
export const signUp = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, saltRounds)
    const user = await prisma.user.create({
        data: {
            ...data,
            password: hashedPassword
        },
    })
    return user
}
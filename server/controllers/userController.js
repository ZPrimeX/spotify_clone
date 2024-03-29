import prisma from '../lib/prisma'
import bcrypt from 'bcrypt'
import getConfig from 'next/config'
import jwt from 'jsonwebtoken'

const { serverRuntimeConfig } = getConfig()

const saltRounds = 10
export const signUp = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, saltRounds)
    const user = await prisma.user.create({
        data: {
            username: data.username.toLowerCase(),
            email: data.email.toLowerCase(),
            password: hashedPassword
        },
    })
    const token = jwt.sign({ id: user.id }, serverRuntimeConfig.secret)
    return {
        id: user.id,
        username: user.username,
        is_staff: user.is_staff,
        email: user.email,
        token
    }
}


export const login = async (data) => {
    // extract user by email
    // compare passwords
    // if passwords are not matching, return an error
    // else generate a jwt token 
    // send back the user data with a token

    // extract user by email
    const user = await prisma.user.findUnique({
        where: { email: data.email }
    })

    // compare passwords
    const isPasswordValid = await bcrypt.compare(data.password, user.password)
    // if passwords are not matching, return an error
    if (!isPasswordValid) {
        return { message: 'error', data: 'invalid password' }
    }
    // else generate a jwt token
    const token = jwt.sign({ id: user.id }, serverRuntimeConfig.secret)

    // send back user data with token
    return {
        data: {
            ...user,
            password: null,
            token
        },
        message: 'success'

    }
}

export const validateSignUp = async (data) => {
    // data = {username}
    const foundUser = await prisma.user.findUnique({
        where: { username: data.username }
    })

    if (foundUser?.username) {
        return { message: 'error', description: 'this username is already taken' }
    }
    return { message: 'success', description: '' }
}


export const forgotPassword = async (email) => {
    const user = await prisma.user.findUnique({
        where: {email: email}
    })
    if(!user){
        return{message: 'not found'}
    }
    const token = jwt.sign({ id: user.id }, serverRuntimeConfig.secret)

    return {message: 'success', user, token}
}

export const resetPassword = async (password, email) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const user = await prisma.user.update({
        where: {email: email}, 
        data: {password: hashedPassword}
    })
    return {message: 'success', user}
    } catch (error) {
        console.log(error);
    }
}
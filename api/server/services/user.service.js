import models from '../db/models'
import Util from '../utils/Utils';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const util = new Util();
const { User } = models
const {
  JWT_AUTH_SECRET,
  AUTH_TOKEN_LIFETIME
} = process.env;
class UserService {

  static async createUser(newUser) {
    try {
      const {name, email, password, phone_number} = newUser
      const emailExist = await User.findOne({
        where: {email: email}
      });
      if (!emailExist) {
       util.setError(400, "Email already exist!")
      };
      const created = await User.create({
        name,
        email,
        password,
        phoneNumber: phone_number,
      });
      if (created) {
        util.setSuccess(201, "User created successfully")
      };
      return;
    } catch (error) {
      throw error
    }
  }

  static async getUser(data) {
    const {email, password} = data
    try {
      const user = await User.findOne({
        where: {email: email, password: password}
      });
      console.log(user)
      if (user == null) {
        return util.setError(404, "user not found")
      };
      return user
    } catch (error) {
      throw error
    }
  }

  static async updateUser(id, data) {
    try {
      const userToUpdate = await User.findOne({
        where: { id: Number(id) }
      });
      if (userToUpdate) {
        await User.update(data, { where: { id: Number(id) } });
        return data
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async deleteUser(id) {
    try {
      const userToDelete = await User.findOne({ where: { id: Number(id) } });

      if (userToDelete) {
        const deletedUser = await User.destroy({
          where: { id: Number(id) }
        });
        return deletedUser;
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default UserService
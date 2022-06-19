import UserService from "../services/user.service";
import Util from "../utils/Utils";

const util = new Util();

class UserController {
  static async createUser(req, res) {
    const newUser = req.body;
    try {
      const createdUser = await UserService.createUser(newUser);
      util.setSuccess(201, "User Created", createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async getUser(req, res) {
    const data = req.body;
    try {
      const user = await UserService.getUser(data);
      console.log(user)
      if (!user) {
        util.setError(404, `Cannot find user with the email ${data.email}`);
        return util.send(res)
      } else {
        util.setSuccess(200, "Found User", user);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error.message);
      return util.send(res);
    }
  }

  static async updateUser(req, res) {
    const alteredUser = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatedUser = await UserService.updateUser(id, alteredUser);
      if (!updatedUser) {
        util.setError(404, `Cannot find user with the id: ${id}`);
      } else {
        util.setSuccess(200, "User updated", updatedUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res)
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const userToDelete = await UserService.deleteUser(id);
      if (userToDelete) {
        util.setSuccess(200, 'User deleted');
      } else {
        util.setError(404, `User with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default UserController
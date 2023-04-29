import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcCryptHandle";
import { generateToken } from "../utils/jwtHandler";

const registerNewUser = async (authUser: User) => {
  const checkIs = await UserModel.findOne({ email: authUser?.email });
  if (checkIs) return "ALREADY_USER";

  const passHash = await encrypt(authUser.password);

  const registerNewUser = await UserModel.create({
    email: authUser.email,
    password: passHash,
    name: authUser.name,
  });

  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email: email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password
  const isVerified = await verified(password, passwordHash)

  if(!isVerified) return "PASSWORD_INCORRECT"

  const token = generateToken(checkIs.email)
  const data = {
    token,
    user: checkIs
  }
  return data
};

export { registerNewUser, loginUser };

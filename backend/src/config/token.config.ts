import { registerAs } from '@nestjs/config';

export default registerAs('token', () => ({
  expires_in: process.env.TOKEN_EXPIRATION_TIME,
  jwt_at: process.env.JWT_AT_SECRET_KEY,
  jwt_rt: process.env.JWT_RF_SECRET_KEY,
}));

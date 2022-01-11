export const env = {
  DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/mono-assessment',
  JWT_KEYS: {
    x: process.env.JWT_X!,
    y: process.env.JWT_Y!,
    d: process.env.JWT_D!,
    kid: process.env.JWT_KID!,
  },
  MONO_KEY: process.env.MONO_KEY!,
  APP_PORT: process.env.APP_PORT || '0.0.0.0:55055',
};

export const constants = {
  MONO_BASE_URL: 'https://api.withmono.com',
};

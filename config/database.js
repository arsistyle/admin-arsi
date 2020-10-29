module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "strapi-hook-mongoose",
      settings: {
        uri: env("DATABASE_URI"),
      },
      options: {
        ssl: true,
      },
    },
  },
});

module.exports = {
  pluginOptions: {
    s3Deploy: {
      region: "us-east-1",
      bucket: "emergencybirb.com",
      assetPath: "dist",
      deployPath: "/",
      pwa: false,
      uploadConcurrency: 5
    }
  }
};

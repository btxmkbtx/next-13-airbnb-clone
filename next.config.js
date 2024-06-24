/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    //跨域的图像url必须要在这里配置域名
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com", //4:30:50
    ],
  },
};

module.exports = nextConfig;

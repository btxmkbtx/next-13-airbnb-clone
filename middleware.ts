export { default } from "next-auth/middleware";

//next-auth的中间件提供了一个过滤器配置，可以让以下url再没有用户登录的状态下无法直接通过手写url访问
export const config = {
  matcher: ["/trips", "/reservations", "/properties", "/favorites"],
};

class Routes {
  static readonly BACKEND_URL: string = String(
    process.env.NEXT_PUBLIC_BACKEND_URL
  );

  // Backend Route
  // Sanctum
  static readonly SANCTUM = Routes.BACKEND_URL + "/sanctum/csrf-cookie";
  // Login
  static readonly LOGIN = Routes.BACKEND_URL + "/login";
  // SPA
  static readonly AUTH_CONFIRM = Routes.BACKEND_URL + "/auth/confirm";
  static readonly POST_CREATE = Routes.BACKEND_URL + "/auth/post/create";

  // Frontend Route
  static readonly INDEX = "/";
  // User
  static readonly DASHBOARD = "/pages/user/dashboard";
  // Post
  static readonly POST_LIST = "/pages/post/list";
  static readonly CREATE = "/pages/post/create";
}

export default Routes;

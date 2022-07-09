class Routes {
  static readonly BACKEND_URL: string = String(
    process.env.NEXT_PUBLIC_BACKEND_URL
  );

  // Backend Route
  // Sanctum
  static readonly SANCTUM: string = Routes.BACKEND_URL + "/sanctum/csrf-cookie";
  // Login
  static readonly LOGIN: string = Routes.BACKEND_URL + "/login";
  // SPA
  static readonly AUTH_CONFIRM: string = Routes.BACKEND_URL + "/auth/confirm";
  static readonly POST_CREATE: string = Routes.BACKEND_URL + "/auth/post/create";

  // Frontend Route
  static readonly INDEX: string = "/";
  // User
  static readonly DASHBOARD: string = "/pages/user/dashboard";
  // Post
  static readonly POST_LIST: string = "/pages/post/list";
  static readonly CREATE: string = "/pages/post/create";
}

export default Routes;

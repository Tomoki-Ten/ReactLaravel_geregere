class Routes {
  static readonly BACKEND_URL: string = String(
    process.env.NEXT_PUBLIC_BACKEND_URL
  );

  /**
   * Backend Route
   */
  // Sanctum
  static readonly SANCTUM: string = Routes.BACKEND_URL + "/sanctum/csrf-cookie";
  // Login
  static readonly LOGIN: string = Routes.BACKEND_URL + "/login";
  // API
  // SPA
  static readonly AUTH_CONFIRM: string = Routes.BACKEND_URL + "/auth/confirm";
  static readonly POST_CREATE: string =
    Routes.BACKEND_URL + "/auth/post/create";

  static readonly POST_LIST: string = Routes.BACKEND_URL + "/auth/post/list";

  /**
   * Frontend Page Route
   */
  static readonly INDEX: string = "/";
  static readonly APP: string = "/app";
  // Page
  // User
  static readonly P_USER_DASHBOARD: string = Routes.APP + "/user/dashboard";
  static readonly P_USER_CREATE: string = Routes.APP + "/user/create";

  // Post: prefix: P_
  static readonly P_POST_DASHBOARD: string = Routes.APP + "/post/dashboard";
  static readonly P_POST_CREATE: string = Routes.APP + "/post/create";
}

export default Routes;

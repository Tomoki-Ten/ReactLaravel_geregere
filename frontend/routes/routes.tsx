class Routes {
  /**
   * Backend Routes
   * prefix: B_
   * Meaning: Backend
   */
  static readonly BACKEND_URL: string = String(
    process.env.NEXT_PUBLIC_BACKEND_URL
  );
  // Sanctum
  static readonly SANCTUM: string = Routes.BACKEND_URL + "/sanctum/csrf-cookie";
  // Login
  static readonly LOGIN: string = Routes.BACKEND_URL + "/login";
  static readonly LOGOUT: string = Routes.BACKEND_URL + "/auth/logout";
  // API
  static readonly AUTH_CONFIRM: string = Routes.BACKEND_URL + "/auth/confirm";
  static readonly B_POST_CREATE: string =
    Routes.BACKEND_URL + "/auth/post/create";

  static readonly POST_LIST: string = Routes.BACKEND_URL + "/auth/post/list";

  /**
   * Frontend Routes
   * Prefix: F_
   * Meaning: Frontend
   */
  static readonly INDEX: string = "/";
  static readonly APP: string = "/app";
  // User
  static readonly F_USER_DASHBOARD: string = Routes.APP + "/user/Dashboard";
  static readonly F_USER_CREATE: string = Routes.APP + "/user/Create";
  // Post
  static readonly F_POST_DASHBOARD: string = Routes.APP + "/post/Dashboard";
  static readonly F_POST_CREATE: string = Routes.APP + "/post/Create";
  static readonly F_POST_LIST: string = Routes.APP + "/post/List";
}

export default Routes;

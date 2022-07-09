import Link, { LinkProps } from "next/link";

import Routes from "../../routes/routes";

const Nav = (): JSX.Element => {
  return (
    <div>
      <div>
        <span>
          <big>Nav: </big>
        </span>
        {/* <Link href={Routes.INDEX}>
          <a> [Index] </a>
        </Link> */}
        <Link href={Routes.INDEX}>
          <a href=""> [Login] </a>
        </Link>
        <Link href={Routes.DASHBOARD}>
          <a> [Dashboard] </a>
        </Link>
        <Link href={Routes.CREATE}>
          <a> [Create] </a>
        </Link>
        <Link href={Routes.POST_LIST}>
          <a> [Post List]</a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;

import { HOME_PATH, MENU_PATH, ROUTINE_PATH } from "@/constants/routes";
import NavigationBar from "../common/NavigationBar";
import { Icon } from "../common/Icon";

function GlobalNavigationBar() {
  return (
    <NavigationBar>
      <NavigationBar.Item
        route={ROUTINE_PATH}
        icon={<Icon name="timer" className="h-6 w-6 fill-primary-700" />}
      />
      <NavigationBar.Item
        route={HOME_PATH}
        icon={<Icon name="home" className="h-6 w-6 fill-primary-700" />}
      />
      <NavigationBar.Item
        route={MENU_PATH}
        icon={<Icon name="menu" className="h-6 w-6 fill-primary-700" />}
      />
    </NavigationBar>
  );
}

export default GlobalNavigationBar;

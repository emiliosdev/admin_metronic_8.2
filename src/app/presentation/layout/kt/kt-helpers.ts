import { DrawerComponent, MenuComponent, ScrollComponent, ToggleComponent } from "src/app/presentation/layout/kt/components";

const menuReinitialization = () => {
  setTimeout(() => {
    MenuComponent.reinitialization();
    DrawerComponent.reinitialization();
    ToggleComponent.reinitialization();
    ScrollComponent.reinitialization();
  }, 50);
}

export { menuReinitialization }

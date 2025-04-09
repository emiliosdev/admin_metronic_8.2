import { Component  } from '@angular/core';
import {KeeniconComponent} from "@presentation/shared/components/keenicon/keenicon.component";
import {Config} from "@core/config/config";


@Component({
  selector: 'app-sidebar-footer',
  imports: [KeeniconComponent],
  templateUrl: './sidebar-footer.component.html',
})
export class SidebarFooterComponent {
  appPreviewChangelogUrl: string = Config.appPreviewChangelogUrl;

}

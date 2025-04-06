import {environment} from "@env/environment";

export const Config = {
  URL_BACKEND: environment.URL_BACKEND,
  URL_SERVICIOS: environment.URL_SERVICIOS,
  URL_FRONTEND: environment.URL_FRONTEND,
  appVersion: environment.appVersion,
  USERDATA_KEY: environment.USERDATA_KEY,
  appPreviewChangelogUrl: environment.appPreviewChangelogUrl
}

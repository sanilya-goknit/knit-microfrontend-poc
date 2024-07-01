import { registerApplication, start } from "single-spa";
registerApplication({
  name: "@knit-mf-test/spa-demo-home",
  app: () => System.import("@knit-mf-test/spa-demo-home"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@knit-mf-test/header",
  app: () => System.import("@knit-mf-test/header"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});

import { WebView } from "https://deno.land/x/webview/mod.ts";

await new WebView({
  title: "Deno Chime Example",
  url: `https://app.chime.aws/`,
  height: 600,
  resizable: true,
  debug: true,
  frameless: false,
}).run();

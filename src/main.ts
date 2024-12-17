import Aurelia, { StyleConfiguration } from 'aurelia';
import { MyApp } from './my-app';

// @ts-expect-error - This is a CSS file
import bootstrap from 'bootstrap/dist/css/bootstrap.css?inline';

// Convert the CSS string to CSSStyleSheet
const sheet = new CSSStyleSheet();
sheet.replaceSync(bootstrap);

Aurelia
  .register(StyleConfiguration.shadowDOM({
    // optionally add the shared styles for all components
    sharedStyles: [sheet]
  }))
  .app(MyApp)
  .start();

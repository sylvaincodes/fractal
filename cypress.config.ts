import { defineConfig } from "cypress";
import { clerkSetup } from "@clerk/testing/cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return clerkSetup({ config });
    },
    baseUrl: "http://localhost:3000",
    testIsolation: false,
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  defaultCommandTimeout: 10000,
  env: {},
});

/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";
export default {
  // Defaults options
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
      "./node_modules/flowbite/**/*.{js,ts}",
    ],
    plugins: [flowbite()],
    config: {},
    viewer: true,
  },
};

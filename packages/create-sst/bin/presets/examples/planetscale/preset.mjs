import { extend, extract, install } from "create-sst";

export default [
  extend("presets/starters/typescript-starter"),
  extract(),
  install({
    packages: ["planetscale-node"],
    path: "backend",
  }),
];

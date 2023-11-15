import pkgJson from "../package.json" assert { type: "json" };

export const libFunction = () => {
  console.log("Hey from libFunction! Version:", pkgJson.version);
  return pkgJson.version;
};

# nwjs-packager-demo
An application used to test nwjs-packager.

## Installation

1. Git clone the [nwjs-packager](https://github.com/charlielee/nwjs-packager) repository
2. Git clone this repository
3. In the **nwjs-packager** directory, run `npm install` and then `npm link`.
4. In the **nwjs-packager-demo** directory, run `npm link nwjs-packager`.

Any changes you make while developing nwjs-packager should be reflected in the nwjs-packager-demo node-modules folder like magic!

## Running

Run `npm run build` to package the demo application with nwjs-packager's default settings.

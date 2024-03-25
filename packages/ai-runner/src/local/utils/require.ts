const Module = require('module');
const path = require('path');

const originalRequire = Module.prototype.require;

const srcDirectoryPath = path.resolve(__dirname, '../../');

console.log('srcDirectoryPath ->', srcDirectoryPath);

const handler: ProxyHandler<any> = {
  get(target: any, prop: PropertyKey, receiver: any): any {
    console.log('target ->', target);

    const origMethod = target[prop];
    if (typeof origMethod === 'function') {
      return function (...args: any[]) {
        console.log(`Called ${String(prop)} with args: ${JSON.stringify(args)}`);
        // @ts-ignore
        return origMethod.apply(this, args);
      };
    }
    return Reflect.get(target, prop, receiver);
  },
};

Module.prototype.require = function () {
  const module = originalRequire.apply(this, arguments);

  const callerPath = path.dirname(this.filename);
  const requiredModulePath = path.resolve(callerPath, arguments[0]);

  console.log('requiredModulePath ->', requiredModulePath);

  // Check if the required module's path starts with the src directory path
  // This also ensures it does not affect node_modules or other external modules
  if (requiredModulePath.startsWith(srcDirectoryPath)) {
    console.log('Intercepted module from src ->', module);
    if (typeof module === 'object' && !module.isNodeNativeModule) {
      return new Proxy(module, handler);
    }
  }

  return module;
};

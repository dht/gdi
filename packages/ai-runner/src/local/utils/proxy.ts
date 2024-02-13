export function proxify(target: any): any {
  return new Proxy(target, {
    get(target: any, prop: PropertyKey, receiver: any): any {
      const origMethod = target[prop];
      if (typeof origMethod === 'function') {
        return function (...args: any[]) {
          console.log(`Calling method '${String(prop)}' with arguments: `, args);
          // @ts-ignore
          const result = origMethod.apply(this, args);
          console.log(`Method '${String(prop)}' returned: `, result);
          return result;
        };
      } else {
        return origMethod;
      }
    },
  });
}

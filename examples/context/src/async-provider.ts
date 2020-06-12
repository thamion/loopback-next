// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-context
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {BindingScope, Context, inject, Provider} from '@loopback/context';

class AsyncValueProvider implements Provider<string> {
  public value() {
    console.log("AsyncValueProvider");
    return Promise.resolve("my value");
  }
}

class SyncValueProvider implements Provider<string> {
  public value() {
    console.log("SyncValueProvider");
    return "my value";
  }
}

class AsyncValueUser {
  constructor(
    @inject("asyncValue") asyncValue1: string,
    @inject("asyncValue") asyncValue2: string,
    @inject("syncValue") syncValue1: string,
    @inject("syncValue") syncValue2: string,
  ) {
  }
}


export async function main() {
  const ctx = new Context('request');

  ctx.bind("asyncValue").toProvider(AsyncValueProvider).inScope(BindingScope.CONTEXT);
  ctx.bind("syncValue").toProvider(SyncValueProvider).inScope(BindingScope.CONTEXT);
  ctx.bind("AsyncValueUser").toClass(AsyncValueUser);


  await ctx.get("AsyncValueUser");
}

if (require.main === module) {
  main().catch(err => {
    console.error(err);
    process.exit(1);
  });
}

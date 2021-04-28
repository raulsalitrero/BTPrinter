import { WebPlugin } from '@capacitor/core';
import { BTPrinterPlugin } from './definitions';

export class BTPrinterWeb extends WebPlugin implements BTPrinterPlugin {
  constructor() {
    super({
      name: 'BTPrinter',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const BTPrinter = new BTPrinterWeb();

export { BTPrinter };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(BTPrinter);

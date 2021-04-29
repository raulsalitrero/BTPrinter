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
    console.log('echo', options);
    return options;
  }

  async status(): Promise<{ value: boolean }> {
    console.log('status');
    return { value: true };
  }

  async list(): Promise<{
    value: { name: string; address: string; type: number }[];
  }> {
    console.log('list');
    return { value: [] } as {
      value: { name: string; address: string; type: number }[];
    };
  }

  async connect(options: { name: string }): Promise<{ value: string }> {
    console.log('connect: ', options);
    return { value: 'ok' };
  }

  async connected(): Promise<{ value: Boolean }> {
    console.log('connected: ');
    return { value: true };
  }

  async disconnect(): Promise<{ value: string }> {
    console.log('disconnect: ');
    return { value: 'ok' };
  }

  async setEncoding(options: { encoding: string }): Promise<undefined | void> {
    console.log('setEncoding: ', options);
    return;
  }

  async printText(options: { text: string }): Promise<{ value: string }> {
    console.log('printText: ', options);
    return { value: 'ok' };
  }

  async printTextSizeAlign(options: {
    text: string;
    size: number;
    align: number;
  }): Promise<{ value: string }> {
    console.log('printTextSizeAlign: ', options);
    return { value: 'ok' };
  }

  async printBase64(options: {
    imgData: string;
    align: number;
  }): Promise<{ value: string }> {
    console.log('printBase64: ', options);
    return { value: 'ok' };
  }

  async printTitle(options: {
    text: string;
    size: number;
    align: number;
  }): Promise<{ value: string }> {
    console.log('printTitle: ', options);
    return { value: 'ok' };
  }

  async printImageUrl(options: {
    url: string;
    align: number;
  }): Promise<{ value: string }> {
    console.log('printImageUrl: ', options);
    return { value: 'ok' };
  }

  async printPOSCommand(options: {
    dataHex: string;
  }): Promise<{ value: string }> {
    console.log('printPOSCommand: ', options);
    return { value: 'ok' };
  }

  async printQRCode(options: {
    text: string;
    align: number;
    model: number;
    size: number;
    eccLevel: number;
  }): Promise<{ value: string }> {
    console.log('printQRCode: ', options);
    return { value: 'ok' };
  }

  async printBarcode(options: {
    system: number;
    data: string;
    align: number;
    position: number;
    font: number;
    height: number;
  }): Promise<{ value: string }> {
    console.log('printBarcode: ', options);
    return { value: 'ok' };
  }
}

const BTPrinter = new BTPrinterWeb();

export { BTPrinter };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(BTPrinter);

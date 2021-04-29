declare module '@capacitor/core' {
  interface PluginRegistry {
    BTPrinter: BTPrinterPlugin;
  }
}

export interface BTPrinterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  status(): Promise<{ value: boolean }>;
  list(): Promise<{ value: { name: string, address:string, type: number }[] }>;
  connect(options: { name: string }): Promise<{ value: string }>;
  connected(): Promise<{ value: Boolean }>;
  disconnect(): Promise<{ value: string }>;
  setEncoding(options: { encoding: string }): Promise<undefined | void>;
  printText(options: { text: string }): Promise<{ value: string }>;
  printTextSizeAlign(options: {
    text: string;
    size: number;
    align: number;
  }): Promise<{ value: string }>;
  printBase64(options: {
    imgData: string;
    align: number;
  }): Promise<{ value: string }>;
  printTitle(options: {
    text: string;
    size: number;
    align: number;
  }): Promise<{ value: string }>;
  printImageUrl(options: {
    url: string;
    align: number;
  }): Promise<{ value: string }>;
  printPOSCommand(options: { dataHex: string }): Promise<{ value: string }>;
  printQRCode(options: {
    text: string;
    align: number;
    model: number;
    size: number;
    eccLevel: number;
  }): Promise<{ value: string }>;
  printBarcode(options: {
    system: number;
    data: string;
    align: number;
    position: number;
    font: number;
    height: number;
  }): Promise<{ value: string }>;
}

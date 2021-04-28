declare module '@capacitor/core' {
  interface PluginRegistry {
    BTPrinter: BTPrinterPlugin;
  }
}

export interface BTPrinterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

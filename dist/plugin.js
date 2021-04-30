var capacitorPlugin = (function (exports, core) {
    'use strict';

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    class BTPrinterWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'BTPrinter',
                platforms: ['web'],
            });
        }
        echo(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('echo', options);
                return options;
            });
        }
        status() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('status');
                return { value: true };
            });
        }
        list() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('list');
                return { value: [] };
            });
        }
        connect(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('connect: ', options);
                return { value: 'ok' };
            });
        }
        connected() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('connected: ');
                return { value: true };
            });
        }
        disconnect() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('disconnect: ');
                return { value: 'ok' };
            });
        }
        setEncoding(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('setEncoding: ', options);
                return;
            });
        }
        printText(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('printText: ', options);
                return { value: 'ok' };
            });
        }
        printTextSizeAlign(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('printTextSizeAlign: ', options);
                return { value: 'ok' };
            });
        }
        printBase64(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('printBase64: ', options);
                return { value: 'ok' };
            });
        }
        printTitle(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('printTitle: ', options);
                return { value: 'ok' };
            });
        }
        printImageUrl(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('printImageUrl: ', options);
                return { value: 'ok' };
            });
        }
        printPOSCommand(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('printPOSCommand: ', options);
                return { value: 'ok' };
            });
        }
        printQRCode(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('printQRCode: ', options);
                return { value: 'ok' };
            });
        }
        printBarcode(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('printBarcode: ', options);
                return { value: 'ok' };
            });
        }
    }
    const BTPrinter = new BTPrinterWeb();
    core.registerWebPlugin(BTPrinter);

    exports.BTPrinter = BTPrinter;
    exports.BTPrinterWeb = BTPrinterWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map

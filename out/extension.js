"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    console.log('LookML extension is now active!');
    const formatter = vscode.languages.registerDocumentFormattingEditProvider('lookml', {
        provideDocumentFormattingEdits(document) {
            const edits = [];
            // Basic formatting logic: iterate through lines and adjust indentation
            let indentLevel = 0;
            const indentString = "  "; // 2 spaces for LookML
            for (let i = 0; i < document.lineCount; i++) {
                const line = document.lineAt(i);
                let text = line.text.trim();
                // Decrease indent if line contains closing brace
                if (text.startsWith('}')) {
                    indentLevel = Math.max(0, indentLevel - 1);
                }
                // Create the formatted line
                const formattedText = indentString.repeat(indentLevel) + text;
                // If the line changed, replace it
                if (line.text !== formattedText) {
                    edits.push(vscode.TextEdit.replace(line.range, formattedText));
                }
                // Increase indent for the next line if this line ends with an opening brace
                if (text.endsWith('{')) {
                    indentLevel++;
                }
            }
            return edits;
        }
    });
    context.subscriptions.push(formatter);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map
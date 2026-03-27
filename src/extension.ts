import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('LookML extension is now active!');

    const formatter = vscode.languages.registerDocumentFormattingEditProvider('lookml', {
        provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
            const edits: vscode.TextEdit[] = [];
            
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

export function deactivate() {}
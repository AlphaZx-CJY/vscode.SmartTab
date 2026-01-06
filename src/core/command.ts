import * as vscode from 'vscode';
import { Config } from './Config.js';

export const smartTab = (context: vscode.ExtensionContext, editor: vscode.TextEditor) => {
  const currState = context.workspaceState.get('smarttab-active', Config.isEnable());
  if (!currState) {
    vscode.commands.executeCommand('tab');
    return;
  }
  const doc = editor.document;
  const pos = editor.selection.active;
  const line = doc.lineAt(pos.line);
  const lineText = line.text;
  const afterCursor = lineText.substring(pos.character);

  const skipSymbols = Config.getSkipSymbols();

  for (const skipSymbol of skipSymbols) {
    if (afterCursor.startsWith(skipSymbol)) {
      const newPos = pos.translate(0, 1);
      editor.selection = new vscode.Selection(newPos, newPos);
      return;
    }
  }
  vscode.commands.executeCommand('tab');
};

export const toggle = (context: vscode.ExtensionContext) => {
  const currState = context.workspaceState.get('smarttab-active', Config.isEnable());
  context.workspaceState.update('smarttab-active', !currState);
  const status = !currState ? 'enabled' : 'disabled';
  vscode.window.showInformationMessage(`SmartTab is now ${status}.`);
};

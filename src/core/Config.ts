import * as vscode from 'vscode';

export class Config {
  static isEnable(): boolean {
    return vscode.workspace.getConfiguration('smarttab').get('enable', true);
  }

  static getSkipSymbols(): string[] {
    return vscode.workspace
      .getConfiguration('smarttab')
      .get('skipSymbols', ['"', "'", '`', ')', ']', '}', '>', ',', '.', ':', ';']);
  }
}

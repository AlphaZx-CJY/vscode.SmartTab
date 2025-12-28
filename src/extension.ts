// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { smartTab, toggle } from "./core/command.js";
import { Config } from "./core/Config.js";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "smarttab" is now active!');
  context.workspaceState.update("smarttab-active", Config.isEnable());

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  // Command1: Register toggle command
  const toggleDisposable = vscode.commands.registerCommand("toggle", () => {
    toggle(context);
  });

  // Command2: Register smart tab out command
  const disposable = vscode.commands.registerTextEditorCommand(
    "tabout",
    (editor) => {
      smartTab(context, editor);
    }
  );

  // Add to a list of disposables which are disposed when this extension is deactivated
  context.subscriptions.push(toggleDisposable, disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

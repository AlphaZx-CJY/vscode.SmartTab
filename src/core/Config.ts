import * as vscode from "vscode";
import { PairCharacter } from "./PairCharacter.js";

export class Config {
  static isEnable(): boolean {
    return vscode.workspace.getConfiguration("smarttab").get("enable", true);
  }

  static getPairCharacters(): PairCharacter[] {
    const pairCharacters = vscode.workspace
      .getConfiguration("smarttab")
      .get("pairCharacters", [
        { close: '"' },
        { close: "'" },
        { close: "`" },
        { close: ")" },
        { close: "]" },
        { close: "}" },
        { close: ">" },
        { close: "," },
        { close: "." },
        { close: ":" },
        { close: ";" },
      ]);
    return pairCharacters.map(
      (pair: any) => new PairCharacter(pair.open, pair.close)
    );
  }
}

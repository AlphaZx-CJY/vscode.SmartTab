# smarttab

SmartTab is a lightweight Visual Studio Code extension. Main behavior:

- Pressing Tab jumps out of the current bracket or quote (e.g., parentheses, brackets, braces, or quotes) when the caret is immediately before the closing character.

---

**Main behavior**

When the cursor is directly before a configured closing character (for example `)` or `"`), pressing `Tab` moves the cursor after that character instead of inserting a tab character.

**Features**

- Jump out of parentheses, brackets, braces and quotes using Tab.
- Configurable list of closing characters.
- Command: `tabout` (activation). Tab is bound to `tabout` by default in typical editor focus conditions (see `package.json`).

**Development / Install**

Install dependencies:

```powershell
npm install
```

Run in watch mode for development:

```powershell
npm run watch
```

Press `F5` in VS Code to open the extension development host.

**Usage**

After installing the extension, when the caret is immediately before a configured closing character (for example `)` or `"`), pressing `Tab` will move the caret after that character. This reduces manual cursor movement when typing paired characters.

**Settings**

Configuration is declared in `package.json` under `contributes.configuration`. Current keys (name, type, default):

- `smarttab.enable` (boolean, default `true`) — Enable or disable SmartTab.
- `smarttab.pairCharacters` (array of objects) — Characters treated as closing/pair boundaries. Each item is an object with a `close` string property.

Default values (from `package.json`):

```json
{
    "smarttab.enable": true,
    "smarttab.pairCharacters": [
        { "close": "\"" },
        { "close": "'" },
        { "close": "`" },
        { "close": ")" },
        { "close": "]" },
        { "close": "}" },
        { "close": ">" },
        { "close": "," },
        { "close": "." },
        { "close": ":" },
        { "close": ";" }
    ]
}
```

Example `settings.json` snippet:

```json
{
    "smarttab.enable": false,
    "smarttab.pairCharacters": [
        { "close": ")" },
        { "close": "," }
    ]
}
```

**Commands & Keybindings**

- `tabout` — Primary command used by the extension; Tab is bound to it via the extension keybinding when the editor conditions match.
- `toggle` — Toggle SmartTab in workspace (declared in `package.json`).

**Contributing**

PRs and issues are welcome. When submitting a PR, follow the repository style, include tests if applicable, and describe changes in the PR.

**Release Notes**

- `1.0.0` — Initial release.

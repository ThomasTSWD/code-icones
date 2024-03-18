const vscode = require("vscode");
const path = require("path");

function activate(context) {
	let disposable = vscode.commands.registerCommand("extension.codeiconesjsorg", () => {
		const panel = vscode.window.createWebviewPanel(
			"codeiconesjsorg",
			"Icones",
			vscode.ViewColumn.One,
			{
				enableScripts: true,
			}
		);

		const htmlPath = path.join(context.extensionPath, "index.html");
		panel.webview.html = getHtmlContent(htmlPath);
		console.log("Extension activée !");

	});

	context.subscriptions.push(disposable);
}

function getHtmlContent(htmlPath) {
	const fs = require("fs");
	return fs.readFileSync(htmlPath, "utf8");
}

exports.activate = activate;

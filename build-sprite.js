const fs = require("fs");
const path = require("path");
const SVGSpriter = require("svg-sprite");

const config = {
	mode: {
		symbol: {
			dest: ".",
			sprite: "sprite.svg",
		},
	},
};

const spriter = new SVGSpriter(config);

// Carpeta de entrada de íconos y salida del sprite
const inputFolder = path.join(__dirname, "src/icons");
const outputFolder = path.join(__dirname, "dist");

fs.readdir(inputFolder, (err, files) => {
	if (err) {
		console.error("Error leyendo la carpeta de íconos:", err);
		return;
	}

	files.forEach((file) => {
		const filePath = path.join(inputFolder, file);
		const svgContent = fs.readFileSync(filePath, "utf-8");
		spriter.add(filePath, null, svgContent);
	});

	spriter.compile((error, result) => {
		if (error) {
			console.error("Error compilando el sprite:", error);
			return;
		}

		for (const mode of Object.values(result)) {
			for (const resource of Object.values(mode)) {
				fs.mkdirSync(outputFolder, { recursive: true });
				fs.writeFileSync(path.join(outputFolder, "sprite.svg"), resource.contents);
			}
		}

		console.log("Sprite generado correctamente en dist/sprite.svg");
	});
});

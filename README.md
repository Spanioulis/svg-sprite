# Instalación

## Clonar el repositorio (https/ssh):

```sh
git clone https://github.com/Spanioulis/svg-sprite.git
o
git clone git@github.com:Spanioulis/svg-sprite.git
```

## Instalar las dependencias (npm/pnpm):

```sh
npm install
o
pnpm install
```

## Añadir los logos a la carpeta `src/icons`

## Generar el sprite

```sh
npm run build:sprite
o
pnpm run build:sprite
```

El sprite se genera en la carpeta `dist/sprite.svg`

## Cómo incrustar el sprite en un sitio web

```html
<svg>
	<use xlink:href="dist/images/sprite.svg#nombre-del-icono"></use>
</svg>
```

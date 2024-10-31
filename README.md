# Instalación

## Clonar el repositorio (https o ssh):

```sh
git clone https://github.com/Spanioulis/svg-sprite.git
```
```sh
git clone git@github.com:Spanioulis/svg-sprite.git
```

## Instalar las dependencias (npm o pnpm):

```sh
npm install
```
```sh
pnpm install
```

## Añadir los logos a la carpeta `src/icons`

## Generar el sprite

```sh
npm run build:sprite
```
```sh
pnpm run build:sprite
```

El sprite se genera en la carpeta dist: `dist/sprite.svg`

## Cómo incrustar el sprite en tu código

```html
<svg>
	<use xlink:href="dist/images/sprite.svg#nombre-del-icono"></use>
</svg>
```

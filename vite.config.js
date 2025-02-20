import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
    base: '/',  // Asegúrate de que las rutas sean relativas a la raíz
    server: {
        proxy: {
          '/': 'http://localhost',  // Si necesitas redirigir las solicitudes API
        },
        host: '0.0.0.0',  // Permite que se conecten desde cualquier red
        port: 9002,        // O el puerto que prefieras
    },
    plugins: [
        laravel({
            input: [
                'resources/sass/styles.sass',  // Agregar el archivo SASS
                'resources/css/initial.css',
                'resources/js/app.js',
            ],
            refresh: true,  // Habilitar recarga en caliente de Vite
        }),
    ],
    build: {
        minify: false,  // Deshabilitar la minificación de los archivos JS y CSS
        sourcemap: true,  // Generar un mapa de fuente para depuración
        outDir: 'public/assets',  // Los archivos generados por Vite van a esta carpeta
        rollupOptions: {
            output: {
                assetFileNames: 'css/[name].[ext]',  // Genera archivos CSS en public/assets/css/
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
            },
        },
    },
    css: {
        devSourcemap: true,  // Habilitar sourcemaps también para CSS
    },
});

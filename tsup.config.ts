import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/app/index.tsx'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
});

import type { UserConfig } from 'vite';

const config: UserConfig = {
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist'
  }
};

export default config;

import { defineConfig } from 'father';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  umd: {
    entry: {
      'src/utils/index.ts': {
        output: 'dist',
        name: 'barUtils',
        platform: 'browser',
      }
    }
  }
});

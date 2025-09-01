# Project TS

Create Init for config TypeScript Compiler

```bash
tsc --init
```

tsconfig.json (Good to know)

1. "target":"esnext" Compiler to JavaScript Next
2. "rootDir":"./" Set where TypeScript File
3. "outDir":"./dist/" Set where compile finish (javascript file)
4. "include":["src"] Fix Scope of compile file

how to work ?
src/app.ts -> compile -> dist/app.js

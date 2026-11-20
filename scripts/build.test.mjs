import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const html=await readFile(path.join(root,'dist/index.html'),'utf8');
test('build creates a static page with one main heading and no template leftovers',()=>{
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
 assert.doesNotMatch(html,/\{\{|\/api\/content|\/signin-with-chatgpt/);
 assert.match(html,/<html lang="en">/);
});
test('navigation targets and all local assets exist',async()=>{
 for(const m of html.matchAll(/href="#([^"]+)"/g))assert.ok(html.includes(`id="${m[1]}"`),m[1]);
 for(const m of html.matchAll(/(?:src|href)="((?:assets\/|style\.css)[^"]*)"/g))await access(path.join(root,'dist',m[1]));
});

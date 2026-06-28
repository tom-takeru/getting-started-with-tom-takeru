import { readFileSync } from 'node:fs';
import { relative } from 'node:path';

const copyFiles = ['README.md', 'src/app/layout.tsx', 'src/i18n.ts'];

const forbiddenTerms = ['s' + 'lug', 'スラ' + 'ッグ'];
const root = process.cwd();
const failures = [];

for (const file of copyFiles) {
  const contents = readFileSync(file, 'utf8');
  const lines = contents.split(/\r?\n/);

  lines.forEach((line, index) => {
    for (const term of forbiddenTerms) {
      if (line.toLowerCase().includes(term.toLowerCase())) {
        failures.push(`${relative(root, file)}:${index + 1}`);
      }
    }
  });
}

if (failures.length > 0) {
  process.stderr.write(
    [
      'Public copy contains internal routing terminology.',
      ...failures.map(location => `- ${location}`),
      '',
    ].join('\n'),
  );
  process.exit(1);
}

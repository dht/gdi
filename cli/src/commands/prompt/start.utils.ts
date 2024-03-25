import { exec } from 'child_process';
import kleur from 'kleur';

export function copyToClipboard(text: string) {
  const process = exec('pbcopy');
  process.stdin?.write(text);
  process.stdin?.end();
}

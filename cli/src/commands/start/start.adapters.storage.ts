import { StorageAdapter, IFile } from '@gdi/ai-runner';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

export class FsStorageAdapter implements StorageAdapter {
  private rootPath: string;

  constructor(projectRoot: string, storagePath: string) {
    this.rootPath = projectRoot + storagePath;

    if (!fs.existsSync(this.rootPath)) {
      fs.mkdirSync(this.rootPath);
      console.log(
        `Created ${chalk.cyan('storage')} directory at ${chalk.magenta(
          storagePath
        )}`
      );
    }
  }

  file(path: string) {
    return new File(this.rootPath + path);
  }
}

export class File implements IFile {
  constructor(private path: string) {}

  async delete() {
    await fs.unlink(this.path);
  }

  async makePublic() {}

  publicUrl() {
    return this.path;
  }

  async save(buffer: Buffer, options?: Json) {
    const pathInfo = path.parse(this.path);
    fs.mkdirSync(pathInfo.dir, { recursive: true });
    fs.writeFileSync(this.path, buffer);

    if (options?.public) {
      await this.makePublic();
    }
  }
}

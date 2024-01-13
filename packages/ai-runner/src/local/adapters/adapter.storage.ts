import fs from 'fs-extra';
import path from 'path';
import kleur from 'kleur';
import { IFile, StorageAdapter } from '../types';

export class FsStorageAdapter implements StorageAdapter {
  private rootPath: string;

  constructor(projectRoot: string, storagePath: string, private localInstanceUrl: string) {
    this.rootPath = projectRoot + storagePath;

    if (!fs.existsSync(this.rootPath)) {
      fs.mkdirSync(this.rootPath);
      console.log(`Created ${kleur.cyan('storage')} directory at ${kleur.magenta(storagePath)}`);
    }
  }

  file(filePath: string) {
    return new File({
      filePath,
      rootPath: this.rootPath,
      localInstanceUrl: this.localInstanceUrl,
    });
  }
}

type FileInfo = {
  rootPath: string;
  filePath: string;
  localInstanceUrl: string;
};

export class File implements IFile {
  private fullPath: string;

  constructor(private info: FileInfo) {
    const { rootPath, filePath } = info;
    const connector = filePath.startsWith('/') ? '' : '/';
    this.fullPath = rootPath + connector + filePath;
  }

  async delete() {
    await fs.unlink(this.fullPath);
  }

  async makePublic() {}

  publicUrl() {
    const { filePath, localInstanceUrl } = this.info;

    const connector = filePath.startsWith('/') ? '' : '/';

    return localInstanceUrl + connector + filePath.replace(/\\/g, '/');
  }

  async save(buffer: Buffer, options?: Json) {
    const pathInfo = path.parse(this.fullPath);
    fs.mkdirSync(pathInfo.dir, { recursive: true });
    fs.writeFileSync(this.fullPath, buffer);

    if (options?.public) {
      await this.makePublic();
    }
  }
}

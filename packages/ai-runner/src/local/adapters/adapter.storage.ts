import fs from 'fs-extra';
import path from 'path';
import kleur from 'kleur';
import os from 'os';
import { IFile, StorageAdapter } from '../types';
import { addFileToWatch, debounceWatch } from '../utils/assets';

export class FsStorageAdapter implements StorageAdapter {
  private rootPath: string;

  constructor(projectRoot: string, storagePath: string, private localInstanceUrl: string) {
    this.rootPath = projectRoot + storagePath;

    if (!fs.existsSync(this.rootPath)) {
      fs.mkdirSync(this.rootPath);
      console.log(`Created ${kleur.cyan('storage')} directory at ${kleur.magenta(storagePath)}`);
    }
  }

  file(filePath: string, isMeta: boolean = false) {
    return new File(
      {
        filePath,
        rootPath: this.rootPath,
        localInstanceUrl: this.localInstanceUrl,
      },
      isMeta
    );
  }

  addListener(file: IFile) {
    if (file.isMeta) return;

    addFileToWatch(file);
  }

  isValid(filePathAbsolute: string) {
    const rootAbsolutePath = path.resolve(this.rootPath);
    const isInRoot = filePathAbsolute.startsWith(rootAbsolutePath);
    return isInRoot;
  }

  getFile(file: IFile) {
    const p = path.resolve(file.fullPath);

    if (!this.isValid(p)) {
      const sanitized = p.replace(os.homedir(), '~');
      throw new Error(`Invalid file path: ${sanitized}`);
    }

    if (!fs.existsSync(p)) {
      throw new Error(`File not found: ${p}`);
    }

    const buffer = fs.readFileSync(file.fullPath);
    return Promise.resolve(buffer);
  }

  renameFile(file: IFile, newFilePath: string) {
    const p1 = path.resolve(file.fullPath);
    const p2 = path.resolve(newFilePath);

    if (!this.isValid(p1)) {
      const sanitized = p1.replace(os.homedir(), '~');
      throw new Error(`Invalid file path: ${sanitized}`);
    }

    if (!this.isValid(p2)) {
      const sanitized = p1.replace(os.homedir(), '~');
      throw new Error(`Invalid file path: ${sanitized}`);
    }

    if (!fs.existsSync(p1)) {
      throw new Error(`File not found: ${p1}`);
    }

    if (fs.existsSync(p2)) {
      throw new Error(`Cannot overwrite: ${p2}`);
    }

    fs.renameSync(p1, p2);
    return Promise.resolve(true);
  }
}

type FileInfo = {
  rootPath: string;
  filePath: string;
  localInstanceUrl: string;
};

export class File implements IFile {
  public fullPath: string;

  constructor(public info: FileInfo, public isMeta?: boolean) {
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

    debounceWatch(this);

    if (options?.public) {
      await this.makePublic();
    }
  }
}

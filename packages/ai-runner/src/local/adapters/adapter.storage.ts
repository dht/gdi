import fs from 'fs-extra';
import path from 'path';
import kleur from 'kleur';
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

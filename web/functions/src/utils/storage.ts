import { StorageAdapter } from '@gdi/ai-runner';

export class S3Adapter implements StorageAdapter {
  constructor(private bucket: any) {}

  file(path: string, _isMeta?: boolean) {
    return this.bucket.file(path);
  }

  addListener(_file: any) {}

  getFile(file: any) {
    return file.download();
  }

  renameFile(file: any, newFilePath: string) {
    file.move(newFilePath);
  }
}

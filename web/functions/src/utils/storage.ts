import { StorageAdapter } from '@gdi/ai-runner';

export class S3Adapter implements StorageAdapter {
  constructor(private bucket: any) {}

  file(path: string) {
    return this.bucket.file(path);
  }
}

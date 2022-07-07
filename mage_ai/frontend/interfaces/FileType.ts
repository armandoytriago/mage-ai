export enum FileExtensionEnum {
  TXT = 'txt',
}

export default interface FileType {
  content: string;
  name: string;
  path: string;
}

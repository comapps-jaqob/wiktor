import { Stats } from 'node:fs';
export type Caller = (relPath: string, absPath: string, stats: Stats) => any;
export function totalist(dir: string, callback: Caller, prefix?: string): void;

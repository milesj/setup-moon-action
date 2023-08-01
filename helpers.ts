import os from 'node:os';
import path from 'node:path';
import * as glob from '@actions/glob';

export function getMoonDir() {
	return path.join(os.homedir(), '.moon');
}

export function getHomeDir() {
	return path.join(os.homedir(), '.proto');
}

export function getToolsDir() {
	return path.join(getHomeDir(), 'tools');
}

export async function getToolchainCacheKey() {
	const toolchainHash = await glob.hashFiles('.moon/toolchain.yml');

	return `moon-toolchain-${process.platform}-${toolchainHash}`;
}
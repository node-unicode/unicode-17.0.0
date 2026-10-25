import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H2sA+MXyFqsgEG+/qexNECnHZpLiYQNOYw/MBh4ARj8J8OCEq7kAe/E2FEEVKZ8GlIRm2E4kbB3+ws9eIQ==', 'base64')).toString());

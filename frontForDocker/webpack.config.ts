import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
    IBuildEnv, IBuildPaths, 
} from './config/build/types/config';

export default ({ mode: buildMode, port, apiUrl }: IBuildEnv) => {
    const mode = buildMode || 'development';
    const isDev = mode === 'development';
    const PORT = port || 3000;
    const baseUrl = apiUrl || 'http://localhost:8000';

    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    return  buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl: baseUrl,
        project: 'frontend',
    });
};

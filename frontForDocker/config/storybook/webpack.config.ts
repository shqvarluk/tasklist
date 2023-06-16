import path from 'path';
import webpack, {
    DefinePlugin, RuleSetRule, 
} from 'webpack';

import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { IBuildPaths } from '../build/types/config';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: IBuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    const rules = config!.module!.rules as Array<RuleSetRule>;

    config!.module!.rules = rules.map((rule: RuleSetRule) => {
        if (/.svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }
        return rule;
    });

    config!.module!.rules!.push(buildCssLoaders(true));
    config!.module!.rules!.push(buildSvgLoader());

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),

    }));

    return config;
};

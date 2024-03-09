import * as webpack from 'webpack';
import * as path from 'path';
import { buildPath } from '../build/types/buildOptions';
import buildScssLoader from '../build/loaders/buildScssLoader';

export default ({ config }:{config:webpack.Configuration}) => {
    const paths:buildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(buildScssLoader(true));
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    return config;
};

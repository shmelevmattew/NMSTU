const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const storyTemplate = require('./storyTemplate');
const styleTemplate = require('./styleTemplate');
const sharedComponentTemplate = require('./sharedComponentTemplate');
const sharedStorybookTemplate = require('./sharedStorybookTemplate');

module.exports = async (layer, sliceName) => {
    const resolveUIPath = (...segments) => resolveRoot('src', layer, 'ui', sliceName, 'ui', ...segments);

    const createUIDir = async () => {
        try {
            await fs.mkdir(resolveUIPath());
        } catch (e) {
            console.log('Не удалось создать UI директорию');
        }
    };

    const createComponent = async () => {
        try {
            const componentName = firstCharUpperCase(sliceName);
            await fs.writeFile(
                resolveUIPath(`${componentName}.tsx`),
                sharedComponentTemplate(componentName),
            );
            await fs.writeFile(
                resolveUIPath(`${componentName}.stories.tsx`),
                sharedStorybookTemplate(layer, componentName),
            );
            await fs.writeFile(
                resolveUIPath(`${componentName}.module.scss`),
                styleTemplate(componentName),
            );
        } catch (e) {
            console.log('Не удалось создать компонент');
        }
    };

    await createUIDir();
    await createComponent();
};

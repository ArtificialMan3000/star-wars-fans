import kebabCase from 'lodash.kebabcase';
import capitalize from 'lodash.capitalize';

// Переводит строку в обычный регистр
const normalCase = (str) => {
    const words = kebabCase(str).split('-');
    words[0] = capitalize(words[0]);
    return words.join(' ');
};

export { normalCase };

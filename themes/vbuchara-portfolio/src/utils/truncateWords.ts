import v from 'voca';

export function truncateWords(
    text: string,
    length: number,
    suffix: string = '...'
){
    const allWords = v.words(text.trim(), /[^\s]+/g);
    
    if(length > allWords.length){
        return text;
    }

    return allWords
        .slice(0, length)
        .join(" ")
        .concat(suffix);
}
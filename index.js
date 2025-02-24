function  introduction(name){
    return `Hi, my name is ${name}.`
}
introduction('Aki');

function   introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage('Samip', 'React');

function  introductionWithLanguageOptional(name, language='JavaScript'){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage('Gracie');
introductionWithLanguageOptional('Gracie', 'Python')
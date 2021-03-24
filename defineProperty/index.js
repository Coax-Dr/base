import { personalInfo } from './data';
import { personalInfoDefine } from './dataDefine';
import { useStrictObject } from './defineObject';



;(() => {
    const _personalInfo = useStrictObject(personalInfo, personalInfoDefine)
    console.log(_personalInfo);
    _personalInfo[0].setConfig('name', 'writable', true)
    _personalInfo[0].name = 'wu'
})();
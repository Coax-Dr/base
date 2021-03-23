// 工具函数，将模板和数据结合
var tools = (function () {
    function tplReplace (tpl, replaceObj) {
        return tpl.replace(/\{\{(.*?)\}\}/g, function (node, key) {
            return replaceObj[key.trim()];
        });
    }
    return {
        tplReplace: tplReplace
    };
})(); 
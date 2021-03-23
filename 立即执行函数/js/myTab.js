; (function (doc, tpl, tools) {
    function MyTab(el) {
        this.el = doc.querySelector(el);
        this.data = JSON.parse(this.el.getAttribute('data'));
        this._index = 0;
        this.init();
    }

    MyTab.prototype.init = function () { // 初始化
        this._render();
        this._bindEvent();
    }
    // 首次渲染
    MyTab.prototype._render = function () {
        var tabWrapper = doc.createElement('div'); // tap容器
        var pageWrapper = doc.createElement('div'); // page容器
        var oFrag = doc.createDocumentFragment();

        tabWrapper.className = 'tab-wrapper';
        pageWrapper.className = 'page-wrapper';

        this.data.forEach(function (item, index) {
            tabWrapper.innerHTML += tools.tplReplace(tpl.tab('tab'), {
                tab: item.tab,
                current: index === 0 ? 'current' : ''
            });
            pageWrapper.innerHTML += tools.tplReplace(tpl.tab('page'), {
                page: item.page,
                current: index === 0 ? 'current' : ''
            })
        })
        oFrag.appendChild(tabWrapper);
        oFrag.appendChild(pageWrapper);
        this.el.appendChild(oFrag);
    }
    // 在MyTab的原型上添加事件绑定函数
    MyTab.prototype._bindEvent = function () {
        var doms = {
            oTabItems: doc.querySelectorAll('.tab-item'),
            oPageItem: doc.querySelectorAll('.page-item')
        }
        this.el.addEventListener('click', this._handleTabClick.bind(this, doms), false);
         // 事件代理
    }
    MyTab.prototype._handleTabClick = function () {
        var _doms = arguments[0],
            tar = arguments[1].target,
            className = tar.className.trim()
        if (className === 'tab-item') {
            _doms.oTabItems[this._index].className = 'tab-item';
            _doms.oPageItem[this._index].className = 'page-item';
            this._index = [].indexOf.call(_doms.oTabItems, tar);
            tar.className += ' current';
            _doms.oPageItem[this._index].className += ' current';
        }
    }
    window.MyTab = MyTab; // 在window上挂载MyTab函数。
})(document, tpl, tools); // tpl、tools在全局，直接注入
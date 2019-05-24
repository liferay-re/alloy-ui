if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-builder-field-types-modal/aui-form-builder-field-types-modal.js']) {
   __coverage__['build/aui-form-builder-field-types-modal/aui-form-builder-field-types-modal.js'] = {"path":"build/aui-form-builder-field-types-modal/aui-form-builder-field-types-modal.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":46},"end":{"line":1,"column":65}}},"2":{"name":"(anonymous_2)","line":35,"loc":{"start":{"line":35,"column":17},"end":{"line":35,"column":28}}},"3":{"name":"(anonymous_3)","line":45,"loc":{"start":{"line":45,"column":12},"end":{"line":45,"column":23}}},"4":{"name":"(anonymous_4)","line":62,"loc":{"start":{"line":62,"column":14},"end":{"line":62,"column":25}}},"5":{"name":"(anonymous_5)","line":74,"loc":{"start":{"line":74,"column":28},"end":{"line":74,"column":39}}},"6":{"name":"(anonymous_6)","line":85,"loc":{"start":{"line":85,"column":23},"end":{"line":85,"column":39}}},"7":{"name":"(anonymous_7)","line":101,"loc":{"start":{"line":101,"column":34},"end":{"line":101,"column":45}}},"8":{"name":"(anonymous_8)","line":112,"loc":{"start":{"line":112,"column":26},"end":{"line":112,"column":42}}},"9":{"name":"(anonymous_9)","line":123,"loc":{"start":{"line":123,"column":22},"end":{"line":123,"column":43}}},"10":{"name":"(anonymous_10)","line":128,"loc":{"start":{"line":128,"column":33},"end":{"line":128,"column":48}}},"11":{"name":"(anonymous_11)","line":142,"loc":{"start":{"line":142,"column":25},"end":{"line":142,"column":36}}},"12":{"name":"(anonymous_12)","line":156,"loc":{"start":{"line":156,"column":20},"end":{"line":156,"column":31}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":223,"column":74}},"2":{"start":{"line":10,"column":0},"end":{"line":12,"column":67}},"3":{"start":{"line":24,"column":0},"end":{"line":220,"column":3}},"4":{"start":{"line":36,"column":8},"end":{"line":36,"column":68}},"5":{"start":{"line":46,"column":8},"end":{"line":46,"column":50}},"6":{"start":{"line":48,"column":8},"end":{"line":48,"column":78}},"7":{"start":{"line":50,"column":8},"end":{"line":53,"column":10}},"8":{"start":{"line":63,"column":8},"end":{"line":63,"column":80}},"9":{"start":{"line":65,"column":8},"end":{"line":65,"column":54}},"10":{"start":{"line":75,"column":8},"end":{"line":75,"column":54}},"11":{"start":{"line":86,"column":8},"end":{"line":86,"column":65}},"12":{"start":{"line":88,"column":8},"end":{"line":88,"column":20}},"13":{"start":{"line":90,"column":8},"end":{"line":92,"column":11}},"14":{"start":{"line":102,"column":8},"end":{"line":102,"column":20}},"15":{"start":{"line":113,"column":8},"end":{"line":113,"column":38}},"16":{"start":{"line":124,"column":8},"end":{"line":124,"column":68}},"17":{"start":{"line":126,"column":8},"end":{"line":126,"column":52}},"18":{"start":{"line":128,"column":8},"end":{"line":130,"column":11}},"19":{"start":{"line":129,"column":12},"end":{"line":129,"column":56}},"20":{"start":{"line":132,"column":8},"end":{"line":132,"column":52}},"21":{"start":{"line":143,"column":8},"end":{"line":145,"column":11}},"22":{"start":{"line":157,"column":8},"end":{"line":168,"column":10}}},"branchMap":{},"code":["(function () { YUI.add('aui-form-builder-field-types-modal', function (A, NAME) {","","/**"," * The Form Builder Field Types Modal Component"," *"," * @module aui-form-builder"," * @submodule aui-form-builder-field-types-modal"," */","","var CSS_FIELD_TYPE = A.getClassName('field', 'type'),","    CSS_FIELD_TYPES_LIST = A.getClassName('form', 'builder', 'field', 'types', 'list'),","    CSS_FIELD_TYPES_MODAL_TITLE = A.getClassName('modal', 'title');","","/**"," * `A.FormBuilder` extension, which is responsible for all the logic related"," * to displaying the field types for the user."," *"," * @class A.FormBuilderFieldTypesModal"," * @param {Object} config Object literal specifying layout builder configuration"," *     properties."," * @constructor"," */","","A.FormBuilderFieldTypesModal = A.Base.create('form-builder-field-types-modal', A.Modal, [], {","    TPL_HEADER_LABEL: '<h4 class=\"' + CSS_FIELD_TYPES_MODAL_TITLE + '\">{addField}</h4>',","    TPL_TYPES_LIST: '<div class=\"clearfix ' + CSS_FIELD_TYPES_LIST + '\" role=\"main\"></div>',","","    /**","     * Construction logic executed during the `A.FormBuilderFieldTypesModal`","     * instantiation. Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        this.after('fieldTypesChange', this._afterFieldTypesChange);","    },","","    /**","     * Bind the events on the FormBuilderFieldTypesModal UI. Lifecycle.","     *","     * @method bindUI","     * @protected","     */","    bindUI: function() {","        var bodyNode = this.getStdModNode('body');","","        A.FormBuilderFieldTypesModal.superclass.bindUI.apply(this, arguments);","","        this._eventHandles.push(","            bodyNode.delegate('click', this._onClickFieldType, '.' + CSS_FIELD_TYPE, this),","            bodyNode.delegate('key', A.bind(this._onKeyPressFieldType, this), 'enter', '.' + CSS_FIELD_TYPE)","        );","    },","","    /**","     * Renders the FormBuilderFieldTypesModal component instance. Lifecycle.","     *","     * @method renderUI","     * @protected","     */","    renderUI: function() {","        A.FormBuilderFieldTypesModal.superclass.renderUI.apply(this, arguments);","","        this._uiSetFieldTypes(this.get('fieldTypes'));","    },","","    /**","     * Fires after `fieldTypes` attribute changes.","     *","     * @method _afterFieldTypesChange","     * @protected","     */","    _afterFieldTypesChange: function() {","        this._uiSetFieldTypes(this.get('fieldTypes'));","    },","","    /**","     * Fired when a field type is clicked.","     *","     * @method _onClickFieldType","     * @param {EventFacade} event","     * @protected","     */","    _onClickFieldType: function(event) {","        var fieldType = event.currentTarget.getData('fieldType');","","        this.hide();","","        this.fire('selectFieldType', {","            fieldType: fieldType","        });","    },","","    /**","     * Fired when the close button for the field types modal is clicked.","     *","     * @method _onFieldTypesModalCloseClick","     * @protected","     */","    _onFieldTypesModalCloseClick: function() {","        this.hide();","    },","","    /**","     * Fired when a field type is keypressed.","     *","     * @method _onKeyPressFieldType","     * @param {EventFacade} event","     * @protected","     */","    _onKeyPressFieldType: function(event) {","        this._onClickFieldType(event);","    },","","    /**","     * Updates the ui according to the value of the `fieldTypes` attribute.","     *","     * @method _uiSetFieldTypes","     * @param {Array} fieldTypes","     * @protected","     */","    _uiSetFieldTypes: function(fieldTypes) {","        var fieldTypesListNode = A.Node.create(this.TPL_TYPES_LIST);","","        fieldTypesListNode.get('children').remove();","","        A.Array.each(fieldTypes, function(type) {","            fieldTypesListNode.append(type.get('node'));","        });","","        this.set('bodyContent', fieldTypesListNode);","    },","","    /**","     * Returns the template of the modal header.","     *","     * @method _valueHeaderContent","     * @return {Object}","     * @protected","     */","    _valueHeaderContent: function() {","        return A.Lang.sub(this.TPL_HEADER_LABEL, {","            addField: this.get('strings').addField","        });","    },","","    /**","     * Returns the configuration object for the field types modal","     * toolbar.","     *","     * @method _valueToolbars","     * @return {Object}","     * @protected","     */","    _valueToolbars: function() {","        return {","            header: [","                {","                    cssClass: 'close',","                    discardDefaultButtonCssClasses: true,","                    labelHTML: '<span> \\u00D7 </span>',","                    on: {","                        click: A.bind(this._onFieldTypesModalCloseClick, this)","                    }","                }","            ]","        };","    }","}, {","    ATTRS: {","        /**","         * The collection of field types that can be selected as fields for","         * this form builder.","         *","         * @attribute fieldTypes","         * @default []","         * @type Array","         */","        fieldTypes: {","            validator: A.Lang.isArray,","            value: []","        },","","        /**","         * The content displayed in the modal header.","         *","         * @attribute headerContent","         * @type String","         */","        headerContent: {","            valueFn: '_valueHeaderContent'","        },","","        /**","         * The text strings displayed by this component.","         *","         * @attribute strings","         * @type Object","         */","        strings: {","            value: {","                addField: 'Add Field'","            }","        },","","        /**","         * The toolbar configuration object.","         *","         * @attribute toolbar","         * @type Object","         */","        toolbars: {","            validator: A.Lang.isObject,","            valueFn: '_valueToolbars'","        }","    },","","    CSS_PREFIX: 'modal-dialog'","});","","","}, '3.1.0-deprecated.61', {\"requires\": [\"aui-modal\"], \"skinnable\": true});","","}());"]};
}
var __cov_zagBvpIp92dn6DpQAownvA = __coverage__['build/aui-form-builder-field-types-modal/aui-form-builder-field-types-modal.js'];
__cov_zagBvpIp92dn6DpQAownvA.s['1']++;YUI.add('aui-form-builder-field-types-modal',function(A,NAME){__cov_zagBvpIp92dn6DpQAownvA.f['1']++;__cov_zagBvpIp92dn6DpQAownvA.s['2']++;var CSS_FIELD_TYPE=A.getClassName('field','type'),CSS_FIELD_TYPES_LIST=A.getClassName('form','builder','field','types','list'),CSS_FIELD_TYPES_MODAL_TITLE=A.getClassName('modal','title');__cov_zagBvpIp92dn6DpQAownvA.s['3']++;A.FormBuilderFieldTypesModal=A.Base.create('form-builder-field-types-modal',A.Modal,[],{TPL_HEADER_LABEL:'<h4 class="'+CSS_FIELD_TYPES_MODAL_TITLE+'">{addField}</h4>',TPL_TYPES_LIST:'<div class="clearfix '+CSS_FIELD_TYPES_LIST+'" role="main"></div>',initializer:function(){__cov_zagBvpIp92dn6DpQAownvA.f['2']++;__cov_zagBvpIp92dn6DpQAownvA.s['4']++;this.after('fieldTypesChange',this._afterFieldTypesChange);},bindUI:function(){__cov_zagBvpIp92dn6DpQAownvA.f['3']++;__cov_zagBvpIp92dn6DpQAownvA.s['5']++;var bodyNode=this.getStdModNode('body');__cov_zagBvpIp92dn6DpQAownvA.s['6']++;A.FormBuilderFieldTypesModal.superclass.bindUI.apply(this,arguments);__cov_zagBvpIp92dn6DpQAownvA.s['7']++;this._eventHandles.push(bodyNode.delegate('click',this._onClickFieldType,'.'+CSS_FIELD_TYPE,this),bodyNode.delegate('key',A.bind(this._onKeyPressFieldType,this),'enter','.'+CSS_FIELD_TYPE));},renderUI:function(){__cov_zagBvpIp92dn6DpQAownvA.f['4']++;__cov_zagBvpIp92dn6DpQAownvA.s['8']++;A.FormBuilderFieldTypesModal.superclass.renderUI.apply(this,arguments);__cov_zagBvpIp92dn6DpQAownvA.s['9']++;this._uiSetFieldTypes(this.get('fieldTypes'));},_afterFieldTypesChange:function(){__cov_zagBvpIp92dn6DpQAownvA.f['5']++;__cov_zagBvpIp92dn6DpQAownvA.s['10']++;this._uiSetFieldTypes(this.get('fieldTypes'));},_onClickFieldType:function(event){__cov_zagBvpIp92dn6DpQAownvA.f['6']++;__cov_zagBvpIp92dn6DpQAownvA.s['11']++;var fieldType=event.currentTarget.getData('fieldType');__cov_zagBvpIp92dn6DpQAownvA.s['12']++;this.hide();__cov_zagBvpIp92dn6DpQAownvA.s['13']++;this.fire('selectFieldType',{fieldType:fieldType});},_onFieldTypesModalCloseClick:function(){__cov_zagBvpIp92dn6DpQAownvA.f['7']++;__cov_zagBvpIp92dn6DpQAownvA.s['14']++;this.hide();},_onKeyPressFieldType:function(event){__cov_zagBvpIp92dn6DpQAownvA.f['8']++;__cov_zagBvpIp92dn6DpQAownvA.s['15']++;this._onClickFieldType(event);},_uiSetFieldTypes:function(fieldTypes){__cov_zagBvpIp92dn6DpQAownvA.f['9']++;__cov_zagBvpIp92dn6DpQAownvA.s['16']++;var fieldTypesListNode=A.Node.create(this.TPL_TYPES_LIST);__cov_zagBvpIp92dn6DpQAownvA.s['17']++;fieldTypesListNode.get('children').remove();__cov_zagBvpIp92dn6DpQAownvA.s['18']++;A.Array.each(fieldTypes,function(type){__cov_zagBvpIp92dn6DpQAownvA.f['10']++;__cov_zagBvpIp92dn6DpQAownvA.s['19']++;fieldTypesListNode.append(type.get('node'));});__cov_zagBvpIp92dn6DpQAownvA.s['20']++;this.set('bodyContent',fieldTypesListNode);},_valueHeaderContent:function(){__cov_zagBvpIp92dn6DpQAownvA.f['11']++;__cov_zagBvpIp92dn6DpQAownvA.s['21']++;return A.Lang.sub(this.TPL_HEADER_LABEL,{addField:this.get('strings').addField});},_valueToolbars:function(){__cov_zagBvpIp92dn6DpQAownvA.f['12']++;__cov_zagBvpIp92dn6DpQAownvA.s['22']++;return{header:[{cssClass:'close',discardDefaultButtonCssClasses:true,labelHTML:'<span> \xd7 </span>',on:{click:A.bind(this._onFieldTypesModalCloseClick,this)}}]};}},{ATTRS:{fieldTypes:{validator:A.Lang.isArray,value:[]},headerContent:{valueFn:'_valueHeaderContent'},strings:{value:{addField:'Add Field'}},toolbars:{validator:A.Lang.isObject,valueFn:'_valueToolbars'}},CSS_PREFIX:'modal-dialog'});},'3.1.0-deprecated.61',{'requires':['aui-modal'],'skinnable':true});

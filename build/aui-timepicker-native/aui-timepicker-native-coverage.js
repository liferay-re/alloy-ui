if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-timepicker-native/aui-timepicker-native.js']) {
   __coverage__['build/aui-timepicker-native/aui-timepicker-native.js'] = {"path":"build/aui-timepicker-native/aui-timepicker-native.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":52}}},"2":{"name":"TimePickerNativeBase","line":5,"loc":{"start":{"line":5,"column":0},"end":{"line":5,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":24,"column":133}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":18}},"3":{"start":{"line":5,"column":0},"end":{"line":5,"column":34}},"4":{"start":{"line":7,"column":0},"end":{"line":17,"column":2}},"5":{"start":{"line":19,"column":0},"end":{"line":19,"column":46}},"6":{"start":{"line":21,"column":0},"end":{"line":21,"column":136}}},"branchMap":{},"code":["(function () { YUI.add('aui-timepicker-native', function (A, NAME) {","","var Lang = A.Lang;","","function TimePickerNativeBase() {}","","TimePickerNativeBase.ATTRS = {","    nativeMask: {","        validator: Lang.isString,","        value: '%H:%M'","    },","","    nativeType: {","        validator: Lang.isString,","        value: 'time'","    }","};","","A.TimePickerNativeBase = TimePickerNativeBase;","","A.TimePickerNative = A.Base.create('timepicker-native', A.Base, [A.DatePickerDelegate, A.DatePickerNativeBase, A.TimePickerNativeBase]);","","","}, '3.1.0-deprecated.61', {\"requires\": [\"base\", \"base-build\", \"aui-node-base\", \"aui-datepicker-delegate\", \"aui-datepicker-native\"]});","","}());"]};
}
var __cov_nGMaXsquxx3xRSElr7Y4pg = __coverage__['build/aui-timepicker-native/aui-timepicker-native.js'];
__cov_nGMaXsquxx3xRSElr7Y4pg.s['1']++;YUI.add('aui-timepicker-native',function(A,NAME){__cov_nGMaXsquxx3xRSElr7Y4pg.f['1']++;__cov_nGMaXsquxx3xRSElr7Y4pg.s['2']++;var Lang=A.Lang;__cov_nGMaXsquxx3xRSElr7Y4pg.s['3']++;function TimePickerNativeBase(){__cov_nGMaXsquxx3xRSElr7Y4pg.f['2']++;}__cov_nGMaXsquxx3xRSElr7Y4pg.s['4']++;TimePickerNativeBase.ATTRS={nativeMask:{validator:Lang.isString,value:'%H:%M'},nativeType:{validator:Lang.isString,value:'time'}};__cov_nGMaXsquxx3xRSElr7Y4pg.s['5']++;A.TimePickerNativeBase=TimePickerNativeBase;__cov_nGMaXsquxx3xRSElr7Y4pg.s['6']++;A.TimePickerNative=A.Base.create('timepicker-native',A.Base,[A.DatePickerDelegate,A.DatePickerNativeBase,A.TimePickerNativeBase]);},'3.1.0-deprecated.61',{'requires':['base','base-build','aui-node-base','aui-datepicker-delegate','aui-datepicker-native']});

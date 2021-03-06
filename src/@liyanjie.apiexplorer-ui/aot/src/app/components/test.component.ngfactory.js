/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';
import * as i2 from '@angular/common';
import * as i3 from '../../../../src/app/components/test.component';
import * as i4 from '../../../../src/app/services/request.service';
var styles_TestComponent = [];
export var RenderType_TestComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_TestComponent, data: {} });
function View_TestComponent_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'option', [], [[8, 'selected', 0]], null, null, null, null)),
        i0.ɵdid(147456, null, 0, i1.NgSelectOption, [i0.ElementRef, i0.Renderer2,
            [2, i1.SelectControlValueAccessor]], { value: [0, 'value'] }, null), i0.ɵdid(147456, null, 0, i1.ɵq, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0,
                'value'] }, null), (_l()(), i0.ɵted(null, ['', '']))], function (_ck, _v) {
        var currVal_1 = i0.ɵinlineInterpolate(1, '', _v.context.$implicit, '');
        _ck(_v, 1, 0, currVal_1);
        var currVal_2 = i0.ɵinlineInterpolate(1, '', _v.context.$implicit, '');
        _ck(_v, 2, 0, currVal_2);
    }, function (_ck, _v) {
        var currVal_0 = (_v.context.index == 0);
        _ck(_v, 0, 0, currVal_0);
        var currVal_3 = _v.context.$implicit;
        _ck(_v, 3, 0, currVal_3);
    });
}
function View_TestComponent_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'option', [['value',
                'application/json']], null, null, null, null, null)), i0.ɵdid(147456, null, 0, i1.NgSelectOption, [i0.ElementRef,
            i0.Renderer2, [2, i1.SelectControlValueAccessor]], { value: [0, 'value'] }, null),
        i0.ɵdid(147456, null, 0, i1.ɵq, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, 'value'] }, null), (_l()(), i0.ɵted(null, ['application/json']))], function (_ck, _v) {
        var currVal_0 = 'application/json';
        _ck(_v, 1, 0, currVal_0);
        var currVal_1 = 'application/json';
        _ck(_v, 2, 0, currVal_1);
    }, null);
}
function View_TestComponent_4(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 14, 'tr', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(),
            i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 8, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵeld(0, null, null, 5, 'input', [['placeholder', 'Header parameter.']], [[8, 'value', 0], [2, 'ng-untouched', null], [2, 'ng-touched', null],
            [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'ngModelChange'], [null, 'input'], [null,
                'blur'], [null, 'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 8)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 8).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 8)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 8)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.header[_v.context.$implicit.name] = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i1.DefaultValueAccessor]), i0.ɵdid(671744, null, 0, i1.NgModel, [[8, null],
            [8, null], [8, null], [2, i1.NG_VALUE_ACCESSOR]], { model: [0,
                'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(16384, null, 0, i1.NgControlStatus, [i1.NgControl], null, null), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵted(null, ['\n                    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_9 = _co.header[_v.context.$implicit.name];
        _ck(_v, 10, 0, currVal_9);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.context.$implicit.name;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = i0.ɵinlineInterpolate(1, '', _co.values(_v.context.$implicit.values), '');
        var currVal_2 = i0.ɵnov(_v, 12).ngClassUntouched;
        var currVal_3 = i0.ɵnov(_v, 12).ngClassTouched;
        var currVal_4 = i0.ɵnov(_v, 12).ngClassPristine;
        var currVal_5 = i0.ɵnov(_v, 12).ngClassDirty;
        var currVal_6 = i0.ɵnov(_v, 12).ngClassValid;
        var currVal_7 = i0.ɵnov(_v, 12).ngClassInvalid;
        var currVal_8 = i0.ɵnov(_v, 12).ngClassPending;
        _ck(_v, 7, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
    });
}
function View_TestComponent_6(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 7, 'input', [], [[8, 'placeholder', 0], [1, 'required', 0], [2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'ngModelChange'], [null, 'input'],
            [null, 'blur'], [null, 'compositionstart'], [null,
                'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 1).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 1)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.header[_v.parent.context.$implicit.name] = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null),
        i0.ɵdid(16384, null, 0, i1.RequiredValidator, [], { required: [0,
                'required'] }, null), i0.ɵprd(1024, null, i1.NG_VALIDATORS, function (p0_0) {
            return [p0_0];
        }, [i1.RequiredValidator]), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i1.DefaultValueAccessor]), i0.ɵdid(671744, null, 0, i1.NgModel, [[8,
                null], [2, i1.NG_VALIDATORS], [8, null], [2, i1.NG_VALUE_ACCESSOR]], { model: [0, 'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(16384, null, 0, i1.NgControlStatus, [i1.NgControl], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_9 = _v.parent.context.$implicit.required;
        _ck(_v, 2, 0, currVal_9);
        var currVal_10 = _co.header[_v.parent.context.$implicit.name];
        _ck(_v, 5, 0, currVal_10);
    }, function (_ck, _v) {
        var currVal_0 = i0.ɵinlineInterpolate(1, '', _v.parent.context.$implicit.source, ' parameter.');
        var currVal_1 = (i0.ɵnov(_v, 2).required ? '' : null);
        var currVal_2 = i0.ɵnov(_v, 7).ngClassUntouched;
        var currVal_3 = i0.ɵnov(_v, 7).ngClassTouched;
        var currVal_4 = i0.ɵnov(_v, 7).ngClassPristine;
        var currVal_5 = i0.ɵnov(_v, 7).ngClassDirty;
        var currVal_6 = i0.ɵnov(_v, 7).ngClassValid;
        var currVal_7 = i0.ɵnov(_v, 7).ngClassInvalid;
        var currVal_8 = i0.ɵnov(_v, 7).ngClassPending;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
    });
}
function View_TestComponent_7(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 7, 'input', [], [[8, 'placeholder', 0], [1, 'required', 0], [2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'ngModelChange'], [null, 'input'],
            [null, 'blur'], [null, 'compositionstart'], [null,
                'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 1).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 1)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.path[_v.parent.context.$implicit.name] = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null),
        i0.ɵdid(16384, null, 0, i1.RequiredValidator, [], { required: [0,
                'required'] }, null), i0.ɵprd(1024, null, i1.NG_VALIDATORS, function (p0_0) {
            return [p0_0];
        }, [i1.RequiredValidator]), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i1.DefaultValueAccessor]), i0.ɵdid(671744, null, 0, i1.NgModel, [[8,
                null], [2, i1.NG_VALIDATORS], [8, null], [2, i1.NG_VALUE_ACCESSOR]], { model: [0, 'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(16384, null, 0, i1.NgControlStatus, [i1.NgControl], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_9 = _v.parent.context.$implicit.required;
        _ck(_v, 2, 0, currVal_9);
        var currVal_10 = _co.path[_v.parent.context.$implicit.name];
        _ck(_v, 5, 0, currVal_10);
    }, function (_ck, _v) {
        var currVal_0 = i0.ɵinlineInterpolate(1, '', _v.parent.context.$implicit.source, ' parameter.');
        var currVal_1 = (i0.ɵnov(_v, 2).required ? '' : null);
        var currVal_2 = i0.ɵnov(_v, 7).ngClassUntouched;
        var currVal_3 = i0.ɵnov(_v, 7).ngClassTouched;
        var currVal_4 = i0.ɵnov(_v, 7).ngClassPristine;
        var currVal_5 = i0.ɵnov(_v, 7).ngClassDirty;
        var currVal_6 = i0.ɵnov(_v, 7).ngClassValid;
        var currVal_7 = i0.ɵnov(_v, 7).ngClassInvalid;
        var currVal_8 = i0.ɵnov(_v, 7).ngClassPending;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
    });
}
function View_TestComponent_8(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 7, 'input', [], [[8, 'placeholder', 0], [1, 'required', 0], [2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'ngModelChange'], [null, 'input'],
            [null, 'blur'], [null, 'compositionstart'], [null,
                'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 1).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 1)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.query[_v.parent.context.$implicit.name] = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null),
        i0.ɵdid(16384, null, 0, i1.RequiredValidator, [], { required: [0,
                'required'] }, null), i0.ɵprd(1024, null, i1.NG_VALIDATORS, function (p0_0) {
            return [p0_0];
        }, [i1.RequiredValidator]), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i1.DefaultValueAccessor]), i0.ɵdid(671744, null, 0, i1.NgModel, [[8,
                null], [2, i1.NG_VALIDATORS], [8, null], [2, i1.NG_VALUE_ACCESSOR]], { model: [0, 'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(16384, null, 0, i1.NgControlStatus, [i1.NgControl], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_9 = _v.parent.context.$implicit.required;
        _ck(_v, 2, 0, currVal_9);
        var currVal_10 = _co.query[_v.parent.context.$implicit.name];
        _ck(_v, 5, 0, currVal_10);
    }, function (_ck, _v) {
        var currVal_0 = i0.ɵinlineInterpolate(1, '', _v.parent.context.$implicit.source, ' parameter.');
        var currVal_1 = (i0.ɵnov(_v, 2).required ? '' : null);
        var currVal_2 = i0.ɵnov(_v, 7).ngClassUntouched;
        var currVal_3 = i0.ɵnov(_v, 7).ngClassTouched;
        var currVal_4 = i0.ɵnov(_v, 7).ngClassPristine;
        var currVal_5 = i0.ɵnov(_v, 7).ngClassDirty;
        var currVal_6 = i0.ɵnov(_v, 7).ngClassValid;
        var currVal_7 = i0.ɵnov(_v, 7).ngClassInvalid;
        var currVal_8 = i0.ɵnov(_v, 7).ngClassPending;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
    });
}
function View_TestComponent_9(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 5, 'textarea', [], [[8, 'placeholder', 0], [2, 'ng-untouched', null], [2, 'ng-touched', null],
            [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'ngModelChange'], [null, 'input'], [null, 'blur'],
            [null, 'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 1).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 1)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.body[_v.parent.context.$implicit.name] = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null),
        i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i1.DefaultValueAccessor]), i0.ɵdid(671744, null, 0, i1.NgModel, [[8, null],
            [8, null], [8, null], [2, i1.NG_VALUE_ACCESSOR]], { model: [0,
                'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(16384, null, 0, i1.NgControlStatus, [i1.NgControl], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_8 = _co.body[_v.parent.context.$implicit.name];
        _ck(_v, 3, 0, currVal_8);
    }, function (_ck, _v) {
        var currVal_0 = i0.ɵinlineInterpolate(1, '', _v.parent.context.$implicit.source, ' parameter.');
        var currVal_1 = i0.ɵnov(_v, 5).ngClassUntouched;
        var currVal_2 = i0.ɵnov(_v, 5).ngClassTouched;
        var currVal_3 = i0.ɵnov(_v, 5).ngClassPristine;
        var currVal_4 = i0.ɵnov(_v, 5).ngClassDirty;
        var currVal_5 = i0.ɵnov(_v, 5).ngClassValid;
        var currVal_6 = i0.ɵnov(_v, 5).ngClassInvalid;
        var currVal_7 = i0.ɵnov(_v, 5).ngClassPending;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
    });
}
function View_TestComponent_5(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 19, 'tr', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(),
            i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 13, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TestComponent_6)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TestComponent_7)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TestComponent_8)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TestComponent_9)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                        '])),
        (_l()(), i0.ɵted(null, ['\n                    ']))], function (_ck, _v) {
        var currVal_1 = (_v.context.$implicit.source == 'Header');
        _ck(_v, 8, 0, currVal_1);
        var currVal_2 = ((_v.context.$implicit.source == 'Path') || (_v.context.$implicit.source == 'FromUri'));
        _ck(_v, 11, 0, currVal_2);
        var currVal_3 = (_v.context.$implicit.source == 'Query');
        _ck(_v, 14, 0, currVal_3);
        var currVal_4 = ((_v.context.$implicit.source == 'Body') || (_v.context.$implicit.source == 'FromBody'));
        _ck(_v, 17, 0, currVal_4);
    }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;
        _ck(_v, 3, 0, currVal_0);
    });
}
function View_TestComponent_10(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n                    '])), (_l()(),
            i0.ɵeld(0, null, null, 0, 'i', [['class', 'fa fa-gear fa-spin']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['提交中…'])), (_l()(), i0.ɵted(null, ['\n                ']))], null, null);
}
function View_TestComponent_11(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n                    '])), (_l()(),
            i0.ɵeld(0, null, null, 0, 'i', [['class', 'fa fa-play-circle']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['提交测试'])), (_l()(), i0.ɵted(null, ['\n                ']))], null, null);
}
function View_TestComponent_12(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'span', [['style',
                'float:right;']], null, null, null, null, null)),
        (_l()(), i0.ɵeld(0, null, null, 0, 'i', [['class', 'fa fa-hourglass-end']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['：', ' ms'])), i0.ɵppd(2)], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i0.ɵunv(_v, 2, 0, _ck(_v, 3, 0, i0.ɵnov(_v.parent.parent, 0), _co.consumingTime, '1.2-2'));
        _ck(_v, 2, 0, currVal_0);
    });
}
function View_TestComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 160, 'section', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 6, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        【', '】 ', '', '   '])),
        (_l()(), i0.ɵeld(0, null, null, 3, 'span', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.close() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['['])), (_l()(),
            i0.ɵeld(0, null, null, 0, 'i', [['class', 'fa fa-close']], null, null, null, null, null)), (_l()(), i0.ɵted(null, [']'])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 149, 'div', [], [[8, 'className', 0]], null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 49, 'section', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['请求'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 43, 'table', [['class', 'list']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 8, 'thead', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 5, 'tr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 0, 'td', [['class', 'name']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'td', [['class', 'content']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 30, 'tbody', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 21, 'tr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Content-Type'])), (_l()(),
            i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 15, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵeld(0, null, null, 12, 'select', [], [[2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'ngModelChange'], [null,
                'change'], [null, 'blur']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('change' === en)) {
                var pd_0 = (i0.ɵnov(_v, 39).onChange($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 39).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_2 = ((_co.header['Content-Type'] = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i1.SelectControlValueAccessor, [i0.Renderer2, i0.ElementRef], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i1.SelectControlValueAccessor]), i0.ɵdid(671744, null, 0, i1.NgModel, [[8, null], [8, null], [8, null], [2, i1.NG_VALUE_ACCESSOR]], { model: [0, 'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(16384, null, 0, i1.NgControlStatus, [i1.NgControl], null, null), (_l()(), i0.ɵted(null, ['\n                                '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TestComponent_2)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0,
                'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n                                '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TestComponent_3)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TestComponent_4)),
        i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef,
            i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TestComponent_5)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵeld(0, null, null, 13, 'section', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 7, 'button', [['type', 'button']], [[8, 'disabled', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.submit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TestComponent_10)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TestComponent_11)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TestComponent_12)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 80, 'section', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['响应'])), (_l()(),
            i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 74, 'table', [['class', 'list']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 8, 'thead', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 5, 'tr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 0, 'td', [['class', 'name']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'td', [['class', 'content']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 61, 'tbody', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 13, 'tr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Url'])), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 7, 'td', [['class', 'url']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵeld(0, null, null, 4, 'code', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 1, 'pre', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['', '\n'])), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 13, 'tr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Http Code'])), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 7, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵeld(0, null, null, 4, 'code', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 1, 'pre', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['', '\n'])), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 13, 'tr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Response Body'])), (_l()(),
            i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 7, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵeld(0, null, null, 4, 'code', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 1, 'pre', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', '\n'])), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 13, 'tr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Response Headers'])), (_l()(),
            i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 7, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                            '])), (_l()(), i0.ɵeld(0, null, null, 4, 'code', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 1, 'pre', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', '\n'])), (_l()(), i0.ɵted(null, ['\n                            '])),
        (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_11 = _co.header['Content-Type'];
        _ck(_v, 41, 0, currVal_11);
        var currVal_12 = _co.resource.produces;
        _ck(_v, 46, 0, currVal_12);
        var currVal_13 = (!_co.resource.produces || (_co.resource.produces.length == 0));
        _ck(_v, 49, 0, currVal_13);
        var currVal_14 = _co.headers;
        _ck(_v, 55, 0, currVal_14);
        var currVal_15 = _co.resource.parameters;
        _ck(_v, 58, 0, currVal_15);
        var currVal_17 = _co.submitting;
        _ck(_v, 68, 0, currVal_17);
        var currVal_18 = !_co.submitting;
        _ck(_v, 71, 0, currVal_18);
        var currVal_19 = (_co.consumingTime != null);
        _ck(_v, 75, 0, currVal_19);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.resource.method;
        var currVal_1 = _co.basePath;
        var currVal_2 = _co.resource.path;
        _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2);
        var currVal_3 = i0.ɵinlineInterpolate(1, '', _co.resource.method, '');
        _ck(_v, 10, 0, currVal_3);
        var currVal_4 = i0.ɵnov(_v, 43).ngClassUntouched;
        var currVal_5 = i0.ɵnov(_v, 43).ngClassTouched;
        var currVal_6 = i0.ɵnov(_v, 43).ngClassPristine;
        var currVal_7 = i0.ɵnov(_v, 43).ngClassDirty;
        var currVal_8 = i0.ɵnov(_v, 43).ngClassValid;
        var currVal_9 = i0.ɵnov(_v, 43).ngClassInvalid;
        var currVal_10 = i0.ɵnov(_v, 43).ngClassPending;
        _ck(_v, 38, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);
        var currVal_16 = _co.submitting;
        _ck(_v, 65, 0, currVal_16);
        var currVal_20 = _co.requestUrl;
        _ck(_v, 107, 0, currVal_20);
        var currVal_21 = _co.responseCode;
        _ck(_v, 122, 0, currVal_21);
        var currVal_22 = _co.responseBody;
        _ck(_v, 137, 0, currVal_22);
        var currVal_23 = _co.responseHeaders;
        _ck(_v, 152, 0, currVal_23);
    });
}
export function View_TestComponent_0(_l) {
    return i0.ɵvid(0, [i0.ɵpid(0, i2.DecimalPipe, [i0.LOCALE_ID]), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_TestComponent_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.resource;
        _ck(_v, 2, 0, currVal_0);
    }, null);
}
export function View_TestComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'test', [], null, null, null, View_TestComponent_0, RenderType_TestComponent)),
        i0.ɵdid(573440, null, 0, i3.TestComponent, [i4.RequestService], null, null)], null, null);
}
export var TestComponentNgFactory = i0.ɵccf('test', i3.TestComponent, View_TestComponent_Host_0, { section: 'section', basePath: 'basePath',
    headers: 'headers', resource: 'resource' }, { setParameterValue: 'setParameterValue' }, []);
//# sourceMappingURL=test.component.ngfactory.js.map
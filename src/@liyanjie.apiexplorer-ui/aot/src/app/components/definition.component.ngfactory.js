/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '../../../../src/app/components/definition.component';
var styles_DefinitionComponent = [];
export var RenderType_DefinitionComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_DefinitionComponent, data: {} });
function View_DefinitionComponent_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class',
                'comment']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['//', '']))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.key.summary;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_DefinitionComponent_4(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['<', '>']))], null, function (_ck, _v) {
        var currVal_0 = (_v.parent.context.$implicit.type.itemType.definition || _v.parent.context.$implicit.type.itemType.name);
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_DefinitionComponent_5(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class',
                'comment']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['//', '']))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.summary;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_DefinitionComponent_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 14, 'span', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { ngClass: [0, 'ngClass'] }, null), i0.ɵpod({ deleted: 0 }),
        (_l()(), i0.ɵted(null, ['    ', ': ('])), (_l()(), i0.ɵeld(0, null, null, 3, 'span', [['class', 'type']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(),
            i0.ɵand(16777216, null, null, 1, null, View_DefinitionComponent_4)),
        i0.ɵdid(16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, [', '])), (_l()(), i0.ɵeld(0, null, null, 1, 'cite', [['class', 'annotation']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, ['); '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DefinitionComponent_5)),
        i0.ɵdid(16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _ck(_v, 2, 0, _co.isDelete(_v.context.$implicit.name, _v.parent.context.$implicit.value));
        _ck(_v, 1, 0, currVal_0);
        var currVal_3 = _v.context.$implicit.type.itemType;
        _ck(_v, 7, 0, currVal_3);
        var currVal_5 = _v.context.$implicit.summary;
        _ck(_v, 13, 0, currVal_5);
    }, function (_ck, _v) {
        var currVal_1 = _v.context.$implicit.name;
        _ck(_v, 3, 0, currVal_1);
        var currVal_2 = ((_v.context.$implicit.type.definition || _v.context.$implicit.type.name) || _v.context.$implicit.type.value);
        _ck(_v, 5, 0, currVal_2);
        var currVal_4 = (_v.context.$implicit.required ? 'required' : 'optional');
        _ck(_v, 10, 0, currVal_4);
    });
}
function View_DefinitionComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 9, 'span', [], null, null, null, null, null)), (_l()(),
            i0.ɵand(16777216, null, null, 1, null, View_DefinitionComponent_2)),
        i0.ɵdid(16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 1, 'b', [['class', 'class']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, [' ', '\n'])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DefinitionComponent_3)),
        i0.ɵdid(802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef,
            i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['', '\n']))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.key.summary;
        _ck(_v, 2, 0, currVal_0);
        var currVal_3 = _v.context.$implicit.key.properties;
        _ck(_v, 8, 0, currVal_3);
    }, function (_ck, _v) {
        var currVal_1 = _v.context.$implicit.key.name;
        _ck(_v, 5, 0, currVal_1);
        var currVal_2 = '{';
        _ck(_v, 6, 0, currVal_2);
        var currVal_4 = '}';
        _ck(_v, 9, 0, currVal_4);
    });
}
export function View_DefinitionComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'pre', [], null, null, null, null, null)), (_l()(),
            i0.ɵand(16777216, null, null, 1, null, View_DefinitionComponent_1)),
        i0.ɵdid(802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef,
            i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.types;
        _ck(_v, 2, 0, currVal_0);
    }, null);
}
export function View_DefinitionComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'definition', [], null, null, null, View_DefinitionComponent_0, RenderType_DefinitionComponent)),
        i0.ɵdid(245760, null, 0, i2.DefinitionComponent, [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
export var DefinitionComponentNgFactory = i0.ɵccf('definition', i2.DefinitionComponent, View_DefinitionComponent_Host_0, { type: 'type', bind: 'bind',
    clude: 'clude', definitions: 'definitions' }, {}, []);
//# sourceMappingURL=definition.component.ngfactory.js.map
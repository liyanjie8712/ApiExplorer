/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';
import * as i2 from '@angular/common';
import * as i3 from './navigator.component';
import * as i4 from '../services/request.service';
const styles_NavigatorComponent:any[] = ([] as any[]);
export const RenderType_NavigatorComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_NavigatorComponent,data:{}});
function View_NavigatorComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'option',([] as any[]),
      [[8,'selected',0]],(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(147456,(null as any),0,i1.NgSelectOption,[i0.ElementRef,i0.Renderer2,
          [8,(null as any)]],{value:[0,'value']},(null as any)),i0.ɵdid(147456,(null as any),
          0,i1.ɵq,[i0.ElementRef,i0.Renderer2,[8,(null as any)]],{value:[0,'value']},
          (null as any)),(_l()(),i0.ɵted((null as any),['','']))],(_ck,_v) => {
    const currVal_1:any = i0.ɵinlineInterpolate(1,'',_v.context.$implicit.url,'');
    _ck(_v,1,0,currVal_1);
    const currVal_2:any = i0.ɵinlineInterpolate(1,'',_v.context.$implicit.url,'');
    _ck(_v,2,0,currVal_2);
  },(_ck,_v) => {
    const currVal_0:any = _v.context.$implicit.default;
    _ck(_v,0,0,currVal_0);
    const currVal_3:any = _v.context.$implicit.url;
    _ck(_v,3,0,currVal_3);
  });
}
function View_NavigatorComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),0,'input',[['readonly','readonly']],[[8,'value',0]],(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵeld(0,[['select',1]],(null as any),4,'select',[['name','url']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,
          (null as any),View_NavigatorComponent_2)),i0.ɵdid(802816,(null as any),0,
          i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,
              'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'button',[['type','button']],(null as any),[[(null as any),'click']],(_v,
              en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.export(i0.ɵnov(_v,3).value)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Explor'])),
      (_l()(),i0.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = _co.docUrls;
    _ck(_v,6,0,currVal_1);
  },(_ck,_v) => {
    const currVal_0:any = i0.ɵinlineInterpolate(1,'',i0.ɵnov(_v,3).value,'');
    _ck(_v,1,0,currVal_0);
  });
}
export function View_NavigatorComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_NavigatorComponent_1)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
      i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n']))],(_ck,_v) => {
    var _co:i3.NavigatorComponent = _v.component;
    const currVal_0:any = _co.docUrls;
    _ck(_v,1,0,currVal_0);
  },(null as any));
}
export function View_NavigatorComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'navigator',([] as any[]),
      (null as any),(null as any),(null as any),View_NavigatorComponent_0,RenderType_NavigatorComponent)),
      i0.ɵdid(114688,(null as any),0,i3.NavigatorComponent,[i4.RequestService],(null as any),
          (null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const NavigatorComponentNgFactory:i0.ComponentFactory<i3.NavigatorComponent> = i0.ɵccf('navigator',
    i3.NavigatorComponent,View_NavigatorComponent_Host_0,{},{docUrl:'docUrl'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvUHJvamVjdHMvQXBpRXhwbG9yZXIvc3JjL0BsaXlhbmppZS5hcGlleHBsb3Jlci11aS9zcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdG9yLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0RvY3VtZW50cy9Qcm9qZWN0cy9BcGlFeHBsb3Jlci9zcmMvQGxpeWFuamllLmFwaWV4cGxvcmVyLXVpL3NyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0b3IuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvUHJvamVjdHMvQXBpRXhwbG9yZXIvc3JjL0BsaXlhbmppZS5hcGlleHBsb3Jlci11aS9zcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdG9yLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvUHJvamVjdHMvQXBpRXhwbG9yZXIvc3JjL0BsaXlhbmppZS5hcGlleHBsb3Jlci11aS9zcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdG9yLmNvbXBvbmVudC50cy5OYXZpZ2F0b3JDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8bmctdGVtcGxhdGUgW25nSWZdPVwiZG9jVXJsc1wiPlxyXG4gICAgPGlucHV0IHZhbHVlPVwie3tzZWxlY3QudmFsdWV9fVwiIHJlYWRvbmx5PVwicmVhZG9ubHlcIiAvPlxyXG4gICAgPHNlbGVjdCBuYW1lPVwidXJsXCIgI3NlbGVjdD5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwie3tkb2NVcmwudXJsfX1cIiBbc2VsZWN0ZWRdPVwiZG9jVXJsLmRlZmF1bHRcIiAqbmdGb3I9XCJsZXQgZG9jVXJsIG9mIGRvY1VybHNcIj57e2RvY1VybC51cmx9fTwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZXhwb3J0KHNlbGVjdC52YWx1ZSlcIj5FeHBsb3I8L2J1dHRvbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIiwiPG5hdmlnYXRvcj48L25hdmlnYXRvcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztvQkNHUTtNQUFBO2FBQUE7VUFBQSw2REFBQTtVQUFBO1VBQUEsZUFBMEY7SUFBbEY7SUFBUixXQUFRLFNBQVI7SUFBUTtJQUFSLFdBQVEsU0FBUjs7SUFBK0I7SUFBL0IsV0FBK0IsU0FBL0I7SUFBMEY7SUFBQTs7OztvQkFIcEUsMkNBQzFCO01BQUE7TUFBQSw0Q0FBc0Q7TUFDdEQ7VUFBQSwwREFBMkI7VUFBQSxpQkFDdkI7VUFBQSxpREFBQTtxQkFBQTtjQUFBLDJCQUFpSDtNQUM1RywyQ0FDVDtVQUFBO3VCQUFBO1lBQUE7WUFBQTtZQUFzQjtjQUFBO2NBQUE7WUFBQTtZQUF0QjtVQUFBLGdDQUFxRDtNQUFlOztJQUZMO0lBQTNELFdBQTJELFNBQTNEOztJQUZHO0lBQVAsV0FBTyxTQUFQOzs7O29CQURKO01BQUEsbUNBQUE7b0JBQUEsbUNBTWM7TUFBQTs7SUFORDtJQUFiLFdBQWEsU0FBYjs7OztvQkNBQTtNQUFBO2FBQUE7VUFBQTtJQUFBOzs7OyJ9

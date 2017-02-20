import {Directive, ElementRef, Renderer} from 'angular2/core'

//This directive functions to grow/shrink input fields 
@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {
    //_ underline indicates that el is a private field
    //_el: ElementRef *** This is handled by using 'private' in the constructor
    constructor(private el: ElementRef, private renderer: Renderer){

    }
    onFocus(){
        this.renderer.setElementStyle(this.el, 'width', '200');
    }

    onBlur(){
        this.renderer.setElementStyle(this.el, 'width', '120');
    }
}
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-incrementador',
    templateUrl: './incrementador.component.html',
    styles: [
    ]
})
export class IncrementadorComponent implements OnInit
{
    @Input('valor') progreso: number = 90;
    @Input() btnClass: string = 'btn-primary';

    @Output() valorSalida: EventEmitter<number> = new EventEmitter();

    ngOnInit(): void
    {
        this.btnClass = `btn ${ this.btnClass }`;
    }

    cambiarValor(valor: number)
    {
        if (this.progreso == 0 && valor == -5)
            return;
        if (this.progreso == 100 && valor == 5)
            return;
        this.progreso = parseInt(this.progreso.toString()) + valor;
        this.valorSalida.emit(this.progreso);
    }

    onChange(event: number)
    {
        if (event > 100)
            this.progreso = 100;
        else if (event < 0)
            this.progreso = 0;
        else
            this.progreso = event;
        this.valorSalida.emit(this.progreso);
    }
}

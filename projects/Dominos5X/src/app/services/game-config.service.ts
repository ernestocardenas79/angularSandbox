import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'ni-soft-lib';

@Injectable({
    providedIn: 'root',
})
export class GameConfigService {
    get loadConfig(): { winScore: number; players: any[] } {
        return this.gameConfig;
    }
    constructor(private router: Router, private toast: ToastService) {
        this.gameConfig = {
            winScore: 250,
            players: ['Ernesto', 'Fashi', 'Sheko', 'virotirno'],
        };
    }
    private gameConfig;

    winner(nombre: string) {
        alert(`${nombre} los trozoo !!!, Wanna revange?`);
    }

    start(config) {
        this.router.navigate(['score']);

        this.gameConfig = config;
    }
}

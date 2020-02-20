import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class GameConfigService {
    private gameConfig;

    get loadConfig(): { winScore: number; players: any[] } {
        return this.gameConfig;
    }
    start(config) {
        this.router.navigate(['score']);

        console.log(config);
        this.gameConfig = config;
    }
    constructor(private router: Router) {
        this.gameConfig = { winScore: 250, players: ['Ernesto', 'Fashi'] } ;
    }
}

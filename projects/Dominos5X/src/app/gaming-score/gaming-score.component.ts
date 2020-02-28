import { Component, OnInit } from '@angular/core';
import { GameConfigService } from '../services/game-config.service';

@Component({
    selector: 'app-gaming-score',
    templateUrl: './gaming-score.component.html',
    styleUrls: ['./gaming-score.component.scss'],
})
export class GamingScoreComponent implements OnInit {
    config;
    players;
    constructor(private gameConfigService: GameConfigService) {}

    ngOnInit() {
        this.config = this.gameConfigService.loadConfig;
        this.players = this.config.players;
    }
}

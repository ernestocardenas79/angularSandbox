import {
    Component,
    OnInit,
    ViewContainerRef,
    ViewChild,
    TemplateRef,
    ElementRef,
    AfterViewInit,
    ViewChildren,
    QueryList,
} from '@angular/core';
import { GameConfigService } from '../services/game-config.service';
import { PlayerScoreComponent } from './player-score/player-score.component';

@Component({
    selector: 'app-gaming-score',
    templateUrl: './gaming-score.component.html',
    styleUrls: ['./gaming-score.component.scss'],
})
export class GamingScoreComponent implements OnInit, AfterViewInit {
    config;
    players;
    gameStatus = false;

    @ViewChild('overlayContainer') overlayContainer: ElementRef;
    @ViewChild('overlayGlobalTemplate') templateGlobalPortals: TemplateRef<any>;
    @ViewChildren(PlayerScoreComponent) playerList: QueryList<
        PlayerScoreComponent
    >;

    constructor(
        private gameConfigService: GameConfigService,
        private viewContainerRef: ViewContainerRef
    ) {}

    ngOnInit() {
        this.config = this.gameConfigService.loadConfig;
        this.players = this.config.players;
    }

    ngAfterViewInit(): void {
        this.gameConfigService.setTemplate(
            this.overlayContainer,
            this.templateGlobalPortals,
            this.viewContainerRef
        );
    }

    closeModal() {
        this.gameStatus = true;
        this.gameConfigService.closeModal();
    }

    restartGame() {
        this.gameStatus = false;
        this.gameConfigService.restart();
        this.gameConfigService.closeModal();
        this.playerList.forEach(p => p.resetGame());
    }
}

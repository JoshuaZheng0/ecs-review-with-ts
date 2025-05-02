import * as THREE from 'three';
import * as dat from 'dat.gui';

import {threejs_component} from './threejs-component';
import {sparse_voxel_cell_manager} from './sparse-voxel-cell-manager';

import { EntityManager } from './entity-manager';

import {entity} from './entity.js';
import {cloud_controller} from './cloud-controller';
import {player_controller} from './player-controller';
import {voxel_tools} from './voxel-tools';
import {hack_defs}  from './hack-defs';
import {ui_controller} from './ui-controller';
import {defs} from './defs';


class MinecraftClone{
    private entityManager_: EntityManager;
    private previousRAF_: number | null;
    private _guiParams: { general: Record<string, any>};
    private _gui: dat.GUI | null;
    
    constructor(){
        this._Initialize();
    }

    private _Initialize(): void{
        this.entityManager_ = new EntityManager();

        this.LoadControllers_();
        
        this.previousRAF_ = null;
        this.RAF_();
    }

    private CreateGUI_(): void{
        this._guiParams = {
            general:{
            },
        };
        this._gui = new dat.GUI();
        this._gui.close();
    }

    private LoadControllers_(): void{
        const threejs = new entity.Entity();
        threejs.AddComponent(new threejs_component.ThreeJSController());
        this.entityManager_.Add(threejs, 'renderer');
    }

    private RAF_(): void{

    }

    private Step_(timeElapsed: number): void{

    }
}

let _APP: MinecraftClone | null = null;

window.addEventListener('DOMContentLoaded', () => {
    _APP = new MinecraftClone();
})

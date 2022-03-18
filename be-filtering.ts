import {BeFilteringActions, BeFilteringProps, BeFilteringVirtualProps} from './types';
import {register} from 'be-hive/register.js';
import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {hookUp} from 'be-observant/hookUp.js';

export class BeFiltering implements BeFilteringActions{

}

export interface BeFiltering extends BeFilteringProps{}

const tagName = 'be-filtering';

const ifWantsToBe = 'filtering';

const upgrade = '*';

define<BeFilteringProps & BeDecoratedProps<BeFilteringProps, BeFilteringActions>, BeFilteringActions>({
    config:{
        tagName,
        propDefaults:{
            upgrade,
            ifWantsToBe,
            virtualProps: ['caseSensitive', 'filterEvent', 'filterOn', 'list', 'listVal', 'observedElement', 'eventSettings'],
            actions:{
                onList: 'list'
            }
        }
    },
    complexPropDefaults:{
        controller: BeFiltering,
    }
});
register(ifWantsToBe, upgrade, tagName);


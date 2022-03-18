import { register } from 'be-hive/register.js';
import { define } from 'be-decorated/be-decorated.js';
export class BeFiltering {
}
const tagName = 'be-filtering';
const ifWantsToBe = 'filtering';
const upgrade = '*';
define({
    config: {
        tagName,
        propDefaults: {
            upgrade,
            ifWantsToBe,
            virtualProps: ['caseSensitive', 'filterEvent', 'filterOn', 'list', 'listVal', 'observedElement', 'eventSettings'],
            actions: {
                onList: 'list'
            }
        }
    },
    complexPropDefaults: {
        controller: BeFiltering,
    }
});
register(ifWantsToBe, upgrade, tagName);

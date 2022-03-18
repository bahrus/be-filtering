import {IObserve} from 'be-observant/types';
import {INotify} from 'trans-render/lib/types';

export interface BeFilteringVirtualProps{
    list: IObserve;
    filterOn: string;
    filterEvent: string;
    caseSensitive: boolean;
    listVal: any[];
    observedElement: WeakRef<Element>;
    eventSettings: INotify;
}

export interface BeFilteringProps extends BeFilteringVirtualProps{
    proxy: Element & BeFilteringVirtualProps;
}

export interface BeFilteringActions{
    //onList(self: this): Promise<void>;
    //beFiltered(self: this): void;
    
}
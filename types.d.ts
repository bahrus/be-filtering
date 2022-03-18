import {IObserve} from 'be-observant/types';

export interface BeFilteringVirtualProps{
    list: IObserve;
    filterOn: string;
    filterEvent: string;
    caseSensitive: boolean;
    listVal: any[];
    observedElement: WeakRef<Element>;
}
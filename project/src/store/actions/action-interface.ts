import { Action as ReduxAction } from "redux";

export interface Action<ActionType, PayloadType> extends ReduxAction<ActionType> {
    type: ActionType;
    payload?: PayloadType;
}
import { InferActionsTypes } from './redux-store';

type MessageType = {
  id: number;
  message: string;
};

type DialogType = {
  id: number;
  name: string;
};

let initialState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Arbfgghg' },
  ] as Array<MessageType>,
  dialogs: [
    { id: 1, name: 'Dyma' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Yana' },
  ] as Array<DialogType>,
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/DIALOGS/SEND_MESSAGE':
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const actions = {
  sendMessage: (newMessageBody: string) => ({ type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody } as const),
};

export default dialogsReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;

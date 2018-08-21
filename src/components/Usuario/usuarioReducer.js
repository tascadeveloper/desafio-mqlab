import {
  USUARIO_CLEAR_BEGIN,
  USUARIO_CLEAR_END,
  USUARIO_CREATE_BEGIN,
  USUARIO_CREATE_ERROR,
  USUARIO_CREATE_SUCCESS,
} from './usuarioTypes';


const initialState = {
  usuarioData: {},
  isLoadingUsuarioCreate: false,
  usuarioCreateError: null,
};

export default function usuarioReducer(state = initialState, action) {
  switch (action.type) {
    case USUARIO_CREATE_BEGIN:
      return {
        ...state,
        isLoadingUsuarioCreate: true,
      };
    case USUARIO_CREATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoadingUsuarioCreate: false,
      };
    case USUARIO_CREATE_ERROR:
      return {
        ...state,
        ...action.payload,
        isLoadingUsuarioCreate: false,
      };
    case USUARIO_CLEAR_BEGIN:
      return {
        ...state,
      };

    case USUARIO_CLEAR_END:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

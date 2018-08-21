import {
  MOVIMENTACAO_CREATE_BEGIN,
  MOVIMENTACAO_CREATE_ERROR,
  MOVIMENTACAO_CREATE_SUCCESS,
  MOVIMENTACAO_CLEAR_BEGIN,
  MOVIMENTACAO_CLEAR_END,
} from './movimentacaoTypes';

const initialState = {
  movimentacaoData: {},
  isLoadingMovimentacaoCreate: false,
  movimentacaoCreateError: null,
};

export default function movimentacaoReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIMENTACAO_CREATE_BEGIN:
      return {
        ...state,
        isLoadingMovimentacaoCreate: true,
      };
    case MOVIMENTACAO_CREATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoadingMovimentacaoCreate: false,
      };
    case MOVIMENTACAO_CREATE_ERROR:
      return {
        ...state,
        ...action.payload,
        isLoadingMovimentacaoCreate: false,
      };
    case MOVIMENTACAO_CLEAR_BEGIN:
      return {
        ...state,
      };

    case MOVIMENTACAO_CLEAR_END:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

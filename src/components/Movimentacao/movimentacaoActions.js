import {
  MOVIMENTACAO_CLEAR_BEGIN, MOVIMENTACAO_CLEAR_END,
  MOVIMENTACAO_CREATE_BEGIN,
  MOVIMENTACAO_CREATE_ERROR,
  MOVIMENTACAO_CREATE_SUCCESS,
} from './movimentacaoTypes';

export const createMovimentacaoActionBegin = () => ({
  type: MOVIMENTACAO_CREATE_BEGIN,
});

export const createMovimentacaoActionError = movimentacaoError => ({
  type: MOVIMENTACAO_CREATE_ERROR,
  payload: { movimentacaoError },
});

export const createMovimentacaoActionSuccess = movimentacaoData => ({
  type: MOVIMENTACAO_CREATE_SUCCESS,
  payload: { movimentacaoData },
});

export const clearMovimentacaoDataBegin = () => ({
  type: MOVIMENTACAO_CLEAR_BEGIN,
});

export const clearMovimentacaoDataEnd = movimentacaoData => ({
  type: MOVIMENTACAO_CLEAR_END,
  payload: { movimentacaoData },
});

export function clearMovimentacaoData() {
  return (dispatch) => {
    dispatch(clearMovimentacaoDataBegin());
    dispatch(clearMovimentacaoDataEnd({}));
  };
}

export function createMovimentacao(movimentacaoPayload) {
  return (dispatch) => {
    dispatch(createMovimentacaoActionBegin());

    fetch('/api/movimentacao',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(movimentacaoPayload),
      })
      .then(res => res.json())
      .then((usuarioData) => {
        dispatch(createMovimentacaoActionSuccess(usuarioData));
      })
      .catch((loginError) => {
        dispatch(createMovimentacaoActionError(loginError));
      });
  };
}

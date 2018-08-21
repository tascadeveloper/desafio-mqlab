import {
  USUARIO_CLEAR_BEGIN,
  USUARIO_CLEAR_END,
  USUARIO_CREATE_BEGIN,
  USUARIO_CREATE_ERROR,
  USUARIO_CREATE_SUCCESS,
} from './usuarioTypes';

export const createUsuarioActionBegin = () => ({
  type: USUARIO_CREATE_BEGIN,
});

export const createUsuarioActionError = usuarioError => ({
  type: USUARIO_CREATE_ERROR,
  payload: { usuarioError },
});

export const createUsuarioActionSuccess = usuarioData => ({
  type: USUARIO_CREATE_SUCCESS,
  payload: { usuarioData },
});

export const clearUsuarioDataBegin = () => ({
  type: USUARIO_CLEAR_BEGIN,
});

export const clearUsuarioDataEnd = usuarioData => ({
  type: USUARIO_CLEAR_END,
  payload: { usuarioData },
});

export function clearUsuarioData() {
  return (dispatch) => {
    dispatch(clearUsuarioDataBegin());
    dispatch(clearUsuarioDataEnd({}));
  };
}

export function createUsuario(usuarioPayload) {
  return (dispatch) => {
    dispatch(createUsuarioActionBegin());

    fetch('/api/usuario',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(usuarioPayload),
      })
      .then(res => res.json())
      .then((usuarioData) => {
        dispatch(createUsuarioActionSuccess(usuarioData));
      })
      .catch((loginError) => {
        dispatch(createUsuarioActionError(loginError));
      });
  };
}

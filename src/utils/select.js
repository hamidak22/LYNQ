import { store } from '../store/ConfigureStore';

export const select = (getter, _default = null) => {
    try {
        return getter(store.getState());
    } catch (error) {
        return _default;
    }
};

window.reduxSelect = select;

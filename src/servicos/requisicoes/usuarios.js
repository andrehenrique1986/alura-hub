import api from "../api";

export const buscaUsuario = async (nomeUsuario) => {
    try {
        const resultado = await api.get(`/users?login=${nomeUsuario}`);
        return resultado.data[0];
    } catch (error) {
        console.error(error);
        return {};
    }
}
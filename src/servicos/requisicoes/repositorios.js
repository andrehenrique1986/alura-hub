import api from "../api";

  export const pegarRepositoriosDoUsuario = async(id) => {
    try {
        const resultado = await api.get(`/repos?postId=${id}`);
        return resultado.data;
    } catch (error) {
        console.log(error);
        return [];
    }
  } 


  export const salvarRepositoriosDoUsuario = async (postId, nome, data, id) => {
    try {
        console.log(`Tentando salvar repositório com ID ${id}`); 
        const response = await api.put(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId
        });
        console.log('Resposta do servidor:', response.data); 
        return 'sucesso';
    } catch (error) {
        console.error('Erro ao salvar repositório:', error.response ? error.response.data : error.message);
        return 'erro';
    }
}
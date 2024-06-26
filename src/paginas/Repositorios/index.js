import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estilos from "./estilos.js";
import { pegarRepositoriosDoUsuario } from '../../servicos/requisicoes/repositorios.js';
import { useIsFocused } from '@react-navigation/native';

 const Repositorios = ({ route, navigation }) => {
    const [repo, setRepo] = useState([]);
    const estaNaTela = useIsFocused()

    useEffect(async () => {
        const resultado = await pegarRepositoriosDoUsuario(route.params.id);
        setRepo(resultado);
    }, [estaNaTela])

    return (
        <View style={estilos.container}>
                <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
                <TouchableOpacity 
                    style={estilos.botao}
                    onPress={() => navigation.navigate('CriarRepositorio')}
                >
                    <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
                </TouchableOpacity>


                <FlatList 
                   data={repo}
                   style={{with: '100%'}}
                   keyExtractor={repo => repo.id} 
                   renderItem={({item}) => (
                    <TouchableOpacity
                    style={estilos.repositorio} 
                    onPress={() => navigation.navigate('InfoRepositorio', {item})}
                     >
                        <Text style={estilos.repositorioNome}>{item.name}</Text>
                        <Text style={estilos.repositorioData}>Atualizado em {item.data}</Text>
                    </TouchableOpacity>
                   )}
                />

        </View>
    );
}

export default Repositorios;
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { salvarRepositoriosDoUsuario } from '../../servicos/requisicoes/repositorios';

const InfoRepositorio = ({ route, navigation }) => {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);
    
    const salvar = async () => {
        const resultado = await salvarRepositoriosDoUsuario(
            route.params.item.postId, 
            nome,
            data,
            route.params.item.id,
        );

        if (resultado === 'sucesso'){
            Alert.alert("Repositório atualizado !!!"); 
            navigation.goBack();
        } else {
            Alert.alert("Erro ao atualizar repositório");
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity 
                style={estilos.botao}
                onPress={salvar} 
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[estilos.botao, {backgroundColor: '#2F6083', marginTop: 10}]} 
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default InfoRepositorio;
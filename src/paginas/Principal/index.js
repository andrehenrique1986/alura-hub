import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import estilos from './estilos';
import { buscaUsuario } from '../../servicos/requisicoes/usuarios';



const getImageSource = (avatarUrl) => {
    const images = {
        "../../../assets/alexshima.png": require('../../../assets/alexshima.png'),
        "../../../assets/bplastino.png": require('../../../assets/bplastino.png'),
        "../../../assets/glinhares.png": require('../../../assets/glinhares.png'),
        "../../../assets/kbombonatti.png": require('../../../assets/kbombonatti.png'),
        "../../../assets/ahlima.png": require('../../../assets/ahlima.png'),
        "../../../assets/capolonio.png": require('../../../assets/capolonio.png'),
        "../../../assets/ncampos.png": require('../../../assets/ncampos.png'),
        "../../../assets/gmagalhaes.png": require('../../../assets/gmagalhaes.png'),
        "../../../assets/lmoura.png": require('../../../assets/lmoura.png'),
        "../../../assets/pdmartinez.png": require('../../../assets/pdmartinez.png'),
    };

    return images[avatarUrl];
};

 const Principal = ({ navigation }) => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});


     const busca =  async () => {
        const resultado = await buscaUsuario(nomeUsuario);
        
        setNomeUsuario('');
        if (resultado) {
            setUsuario(resultado);
        } else {
            Alert.alert("Usuário não encontrado");
            setUsuario({});
        }
     }


    return (
        <ScrollView>
            <View style={estilos.container}>
          {
            usuario?.login &&
                <>
                    <View style={estilos.fundo} />
                    <View style={estilos.imagemArea}>
                        <Image source={getImageSource(usuario.avatar_url)} style={estilos.imagem} />
                    </View>
                    <Text style={estilos.textoNome}>{usuario.name}</Text>
                    <Text style={estilos.textoEmail}>{usuario.email}</Text>
                    <View style={estilos.seguidoresArea}>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>{usuario.followers}</Text>
                            <Text style={estilos.seguidoresTexto}>Seguidores</Text>
                        </View>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>{usuario.following}</Text>
                            <Text style={estilos.seguidoresTexto}>Seguindo</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Repositorios', {id: usuario.id})}>
                        <Text style={estilos.repositorios}>
                            Ver os repositórios
                        </Text>
                    </TouchableOpacity>
                </> 
                }

                <TextInput
                    placeholder="Busque por um usuário"
                    autoCapitalize="none"
                    style={estilos.entrada}
                    value={nomeUsuario}
                    onChangeText={setNomeUsuario}
                />

                <TouchableOpacity style={estilos.botao} onPress={busca}>
                    <Text style={estilos.textoBotao}>
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Principal;

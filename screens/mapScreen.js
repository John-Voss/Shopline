import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import MapView from 'react-native-maps';
// import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import * as Permissions from 'expo-permissions';
import Geolocation from 'react-native-geolocation-service';

import AppTitle from '../components/AppHeader';

// const [errorMsg, setErrorMsg] = useState(null); // será utilizado para armazenar alguma mensagem de erro, caso ocorra
// const [coords, setCoords] = useState(null);   //vai armazenar a localização atual
export default class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                lat: -25.3961597,
                long: -49.3080606
            },

            coords: {},
            setCoords: {}
        }
    }

    // criando um useEffect que será executado uma vez quando o Hook for chamado (parâmetro passado ao fim da função é vazio).
    componentDidMount() {
        (async function loadPosition() {
            // A função requestMultiple serve para requisitar múltiplas autorizações do usuário em sequência. As requisições são feitas na ordem passada. 

            const result = Permissions.askAsync(
                [
                    Permissions.LOCATION_FOREGROUND,
                    Permissions.LOCATION_BACKGROUND
                    // PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                    // PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
                ]).then(
                    (statuses) => {
                        //statuses é um vetor que contém as respostas escolhidas pelo usuário em cada uma das autorizações solicitadas.
                        const statusFine = statuses[Permissions.LOCATION_FOREGROUND];  //pegamos a autorização que o usuário selecionou para uso do GPS e para obter localização em primeiro plano
                        const statusBack = statuses[Permissions.LOCATION_BACKGROUND];
                        //pegamos a autorização que o usuário selecionou para localização em background 
                        if (Platform.Version < 29) {
                            //Em APIs do Android abaixo da 29 não é necessário permissão para background location, apenas solicitar acesso ao GPS já oferece tudo que é necessário para utilizar a localização em primeiro e segundo plano. Nesse caso, apenas verificamos se a autorização do GPS é positiva
                            if (statusFine == 'granted') {
                                return true;
                            } else {
                                setErrorMsg('Usuário não aceitou solicitação de uso do GPS');
                            }
                        }
                        // Caso a API seja > 29, é necessário verificar se ambas as autorizações foram positivas. 
                        if (statusFine == 'granted' && statusBack == 'granted') {
                            return true;
                        } else {
                            setErrorMsg('Usuário não aceitou solicitação de uso do GPS');
                        }
                    },
                );

            // caso as permissões tenham sido obtidas com sucesso, result será true e a localização do usuário poderá ser obtida.
            if (result) {
                await Geolocation.getCurrentPosition(       //se as permissões foram aceitas, obtemos a localização aqui
                    ({ coords }) => {
                        // O parâmetro {coords} desestrutura a resposta, obtendo apenas a parte relativa às coordenadas. Você também pode receber apenas (position) e observar outras informações que são obtidas ao se solicitar a localização. Nesse exemplo, apenas precisamos das coordenadas.
                        this.setState({
                            setCoords:({
                                latitude: coords.latitude,
                                longitude: coords.longitude
                        })
                    });
            }, (error) => {
                setErrorMsg('Não foi possível obter a localização');
            }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, showLocationDialog: true }
                    //showLocationDialog: essa função convida automaticamente o usuário a ativar o GPS, caso esteja desativado.
                    //enableHighAccuracy: vai solicitar a ativação do GPS e coletar os dados dele
                    //timeout: determina o tempo máximo para o dispositivo coletar uma posição
                    //maximumAge: tempo máximo para coleta de posição armazenada em cache
                )
        }

        })
}
// aqui retornamos as coordenadas e uma possível mensagem de erro que possa ter ocorrido.
// return { coords, errorMsg }



render() {
    return (
        <View style={styles.container}>
            <AppTitle />

            <MapView
                showsUserLocation={true}		//destacando a localização do usuário no mapa
                showsMyLocationButton={false} 	//ocultando o botão que move o mapa para a localização do usuário
                toolbarEnabled={false}	//ocultando opções do google maps ao clicar em objetos do mapa
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                }}	// Fazendo com que o mapa ocupe a tela inteira
                region={{
                    latitude: this.state.setCoords.latitude,	//posição inicial do mapa
                    longitude: this.state.setCoords.longitude,	//posição inicial do mapa
                    latitudeDelta: 0.195,  	//determina o zoom do mapa
                    longitudeDelta: 0.1921,	//determina o zoom do mapa
                    // ...coords	// Aqui sobrescrevemos as variáveis latitude e longitude com a posição do usuário obtida no hook que criamos para obter a localização.
                }}
            />
        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    chooseThirst: {
        fontSize: RFValue(15)
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 5,
        borderColor: '#FF914D',
        borderRadius: 100,
        width: '50%',
        alignItems: 'center',
        marginBottom: 70
    },
    buttonText: {
        fontSize: RFValue(15),
        fontWeight: 'bold'
    },
    location: {
        maxWidth: 288,
        maxHeight: 120,
        // marginBottom: 20,
        // alingSelf: 'center'
    },
    textContainer: {
        flex: 0.08,
        alignItems: 'center',
        marginTop: -80
    },
    buttonContainer: {
        flex: 0.7,
        alignItems: 'center',
        alingSelf: 'stretch',
    }
})
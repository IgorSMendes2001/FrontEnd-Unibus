import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../components/Login'
import Welcome from '../components/Welcome'
import Rotas from './../components/Rotas';
import Cadastro from "../components/Cadastro";
import Itinerarios from "../components/Itinerarios";
import Horarios from "../components/Horarios";
import Menu from './../components/Menu';
import Cartao from "../components/Cartao";
const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Bem-Vindo"
            component={Welcome}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Menu"
            component={Menu}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Rotas"
            component={Rotas}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Itinerários"
            component={Itinerarios}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Horários"
            component={Horarios}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Cartão"
            component={Cartao}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
    )

}
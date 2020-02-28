import React, {useEffect, useState} from 'react';
import {
  Animated,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
} from 'react-native';
import Firebase from 'react-native-firebase';

import logoImage from '../../assets/predio-64.png';
import Color from '../../config/color';

const sizeLogo = {
  maxX: 140,
  maxY: 140,
  minX: 140 - 120 / 2,
  minY: 140 - 120 / 2,
};

function Login({route}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {efetuarLogin, loadingScreen} = route.params;

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(
    new Animated.ValueXY({x: sizeLogo.maxX, y: sizeLogo.maxY}),
  );

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', tecladoAparece);
    Keyboard.addListener('keyboardDidHide', tecladoOcultado); //*/

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 6,
        bounciness: 15,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  function tecladoAparece() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: sizeLogo.minX,
        duration: 200,
      }),
      Animated.timing(logo.y, {
        toValue: sizeLogo.minY,
        duration: 200,
      }),
    ]).start();
  }

  function tecladoOcultado() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: sizeLogo.maxX,
        duration: 250,
      }),
      Animated.timing(logo.y, {
        toValue: sizeLogo.maxY,
        duration: 250,
      }),
    ]).start();
  } //*/

  async function login() {
    loadingScreen(true);
    let arrayFields = [];

    if (username === '') {
      arrayFields.push('Email');
    }
    if (password === '') {
      arrayFields.push('Senha');
    }

    if (arrayFields.length > 0) {
      alert(
        'Os campos a seguir são obrigatórios:' +
          arrayFields.map(item => {
            return '\n - ' + item;
          }),
      );

      loadingScreen(false);
      return;
    }

    try {
      const userRet = await Firebase.auth().signInWithEmailAndPassword(
        username,
        password,
      ); //*/

      const token = await userRet.user.getIdToken(true);
      //console.log(token);
      //const userRet = {user: 'relry'};
      userRet.user.token = token;

      efetuarLogin(userRet);
    } catch (err) {
      console.log('Não foi possivel autenticar.');
      console.log(err);
      alert('Usuário e senha inválidos.');
    }

    loadingScreen(false);
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={[
            styles.imageLogo,
            {
              width: logo.x,
              height: logo.y,
            },
          ]}
          source={logoImage}
        />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            transform: [{translateY: offset.y}],
          },
        ]}>
        <TextInput
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize={'none'}
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          returnKeyType={'next'}
          blurOnSubmit={false}
        />
        <TextInput
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize={'none'}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          returnKeyType={'go'}
        />

        <TouchableOpacity
          style={styles.buttonAcessar}
          activeOpacity={0.8}
          onPress={() => {
            //signIn({username, password});
            login();
          }}>
          <Text style={styles.textAcessar}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRecuperarSenha}
          activeOpacity={0.6}>
          <Text style={styles.textRecuperarSenha}>Recuperar senha.</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.primary,
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  imageLogo: {
    borderRadius: 4,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 8,
    width: '90%',
    marginBottom: 15,
    fontSize: 17,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  buttonAcessar: {
    backgroundColor: '#1f3764',
    width: '90%',
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#3c5080',
  },
  textAcessar: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonRecuperarSenha: {
    marginTop: 15,
  },
  textRecuperarSenha: {
    color: '#eee',
  },
});

export default Login;

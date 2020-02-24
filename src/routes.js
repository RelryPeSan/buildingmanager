import React from 'react';
//import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';

import Loading from './components/Loading';
//import storageKey from './config/storageKey';

const AuthContext = React.createContext();

const Stack = createStackNavigator();

export default function App({navigation}) {
  const [loading, setLoading] = React.useState(false);
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            userData: action.data,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            userData: action.data,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            userData: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      userData: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      let userData;

      try {
        //userToken = await AsyncStorage.getItem(storageKey.USER_TOKEN);
        //userData = JSON.parse(await AsyncStorage.getItem(storageKey.USER_DATA));
        console.log(userToken);
        //console.log(userData);
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken, data: userData});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        const token = 'dummy-auth-token';
        setLoading(true);

        await dispatch({
          type: 'SIGN_IN',
          token,
          data,
        });

        //await AsyncStorage.setItem(storageKey.USER_TOKEN, token);
        //await AsyncStorage.setItem(storageKey.USER_DATA, JSON.stringify(data));
        setLoading(false);
      },
      signOut: async () => {
        //await AsyncStorage.clear();
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  function efetuarLogin(data) {
    authContext.signIn(data);
  }

  function efetuarLogout(data) {
    authContext.signOut();
    loadingScreen(false);
  }

  function loadingScreen(bool) {
    setLoading(bool);
  }

  if (state.isLoading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={LoginScreen}
              initialParams={{
                efetuarLogin,
                loadingScreen,
              }}
              options={{
                title: 'Sign in',
                header: () => null,
                // When logging out, a pop animation feels intuitive
                // You can remove this if you want the default 'push' animation
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{header: () => null}}
              initialParams={{
                userdata: state.userData,
                efetuarLogout,
                loadingScreen,
              }}
            />
          )}
        </Stack.Navigator>
        {loading && <Loading />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

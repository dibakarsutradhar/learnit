import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './screens/Landing';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import HomeScreen from './screens/Home';
import CourseScreen from './screens/Course';
import XdScreen from './screens/Xd';

const RootStack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleSignIn = () => {
    // TODO implement real sign in

    setIsAuthenticated(true);
  }

  const handleSignOut = () => {
    // TODO implement real sign out

    setIsAuthenticated(false);
  };

  const handleSignUp = () => {
    // TODO implement real sign up

    setIsAuthenticated(true);
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isAuthenticated ? (
          <>
            <RootStack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerRight: () => (
                  <Button onPress={handleSignOut} title="Sign Out" />
                )
              }}
            />
            <RootStack.Screen
              name="Course"
              component={CourseScreen}
              options={{
                headerRight: () => {
                  <Button onPress={handleSignOut} title="Sing Out" />
                }
              }}
            />
            <RootStack.Screen
              name="Xd"
              component={XdScreen}
              options={{
                headerRight: () => {
                  <Button onPress={handleSignOut} title="Sing Out" />
                }
              }}
            />
          </>
        ) : (
          <>
            <RootStack.Screen
              name="Landing"
              component={LandingScreen}
              options={{
                animationTypeForReplace: 'pop'
              }}
            />
            <RootStack.Screen name="Sign In">
              {(props) => (
                <SignInScreen {...props} onSignIn={handleSignIn} />
              )}
            </RootStack.Screen>
            <RootStack.Screen name="Sign Up">
              {(props) => (
                <SignUpScreen {...props} onSignUp={handleSignUp} />
              )}
            </RootStack.Screen>
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

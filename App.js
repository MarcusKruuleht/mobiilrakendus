import * as React from 'react';
import {
  SafeAreaView
} from 'react-native';

import Signup from './src/screens/auth/Signup'
import AuthHeader from './src/components/AuthHeader'

const App = () => {
  return(
    <SafeAreaView>
      <Signup/>
  </SafeAreaView>
  ) 
}

export default App
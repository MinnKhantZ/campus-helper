import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './app/Navigation.js';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './app/store.js';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
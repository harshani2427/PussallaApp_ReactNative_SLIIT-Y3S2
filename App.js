import React, {useState} from 'react'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import MealsNavigator from './navigation/meals-navigator'
import ShopReducer from './store/reducers/meals-reducer'
import ProductsReducers from './store/reducers/ProductsReducers'
import CartReducers from './store/reducers/CartReducers'
import OrderReducers from './store/reducers/orders-reducer'

const getFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'halfmoon_bold': require('./assets/fonts/halfmoon_bold.ttf')
  }).then(() => {
  })
}

const mainReducer = combineReducers({
  shop: ShopReducer,
 // products: ProductsReducers,
  products:  CartReducers, 
  cartItems: CartReducers,
  itemsCount: CartReducers,
  wishListItems: CartReducers,
  orders: OrderReducers
})

const store = createStore(mainReducer)

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if (!fontLoaded) {
    return (
      <AppLoading startAsync={getFonts}
                  onFinish={() => setFontLoaded(true)}/>
    )
  }
  return (
    <Provider store={store}>
      <MealsNavigator/>
    </Provider>
  )
}

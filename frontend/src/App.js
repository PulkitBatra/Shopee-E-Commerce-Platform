import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PrivateRoute from './routing/PrivateRoute'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <PrivateRoute path='/order/:id' component={OrderScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/register' component={RegisterScreen} />
          <PrivateRoute path='/shipping' component={ShippingScreen} />
          <PrivateRoute path='/payment' component={PaymentScreen} />
          <PrivateRoute path='/placeorder' component={PlaceOrderScreen} />
          <PrivateRoute path='/admin/userlist' component={UserListScreen} />
          <PrivateRoute
            path='/admin/productlist'
            component={ProductListScreen}
          />
          <PrivateRoute
            path='/admin/user/:id/edit'
            component={UserEditScreen}
          />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App

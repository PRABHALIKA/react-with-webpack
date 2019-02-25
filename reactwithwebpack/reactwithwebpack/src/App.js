import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
class App extends React.Component{
    render(){
        return <div>
                  <Header />
                  <Menu />
                  <Footer />
               </div>
    }
}

export default App;
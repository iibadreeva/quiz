import React, {Component} from 'react'
import './Layout.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'

class Layout extends Component{
    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    onCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render(){
        return (
            <div className="Layout">
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.onCloseHandler}
                />
                <MenuToggle
                   onToggle={this.toggleMenuHandler}
                   isOpen={this.state.menu}
                />

                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout;
import { toggleHamburgerMenu } from '../../store/reducers/ui-reducer/ui-slice'
import store from '../../store/redux-store'

class NavBarHelper {
  handleToggleHamburgerMenu() {
    store.dispatch(toggleHamburgerMenu())
  }
}

const navBarHelper = new NavBarHelper()
export default navBarHelper

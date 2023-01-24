import Vue from 'vue'
import {
  Form,
  FormItem,
  Button,
  Input,
  Message,
  Checkbox,
  Menu,
  MenuItem,
  Divider,
  RadioButton,
  RadioGroup,
  Icon,
  Dropdown,
  DropdownMenu,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Form)
Vue.use(Button)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Menu)
Vue.use(Divider)
Vue.use(MenuItem)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Icon)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.prototype.$message=Message

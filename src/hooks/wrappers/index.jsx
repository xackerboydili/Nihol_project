import React from "react";
import { Provider } from "react-redux";
import store from "../../redux"
import { ConfigProvider } from "antd";
import ru_Ru from "antd/locale/ru_RU"

const Wrapper = ({children}) =>{
    return  <Provider store={store}>
                <ConfigProvider locale={ru_Ru}>{children}</ConfigProvider>
            </Provider>
}
export default Wrapper
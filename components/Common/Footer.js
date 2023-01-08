import * as React from 'react';
import { View, Button, Alert, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Style } from '../../assests/css/_common';
import { AuthContext, post, config } from '../../services/common.service';
import DeviceInfoModule from 'react-native-device-info';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Footer = ({ message, navigation, showMessage, ...props }) => {

  const { signOut } = React.useContext(AuthContext);

  const logout = async () => {
    console.log('Logout');
    let deviceId = await DeviceInfoModule.getUniqueId()
    post(config.logoutUrl, {
      device_id: deviceId
    }).then(res => {
      console.log(res);
      signOut();

    }).catch(err => {
      console.log(err);
      signOut();
    })
  }

  return (
    <View style={{ height: 62, width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#358775' }}>
      <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => { navigation.navigate('categories') }} style={{ width: 45, height: 45, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require("../../assests/images/home.png")} style={{ width: 50, height: 45 }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center', }}>
        <TouchableOpacity onPress={() => { showMessage && showMessage(true) }} style={{ width: 35, height: 35, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}  >
          <Image source={require("../../assests/images/info.png")} style={{ width: 35, height: 35 }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => { logout() }} style={{ width: 50, height: 50, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}  >
          <Image source={require("../../assests/images/logout.png")} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Footer;

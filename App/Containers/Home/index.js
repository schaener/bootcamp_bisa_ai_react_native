/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import styles from './styles';
import {withFormik, useFormikContext} from 'formik';
import DeathCasesActions from './../../Redux/DeathCasesRedux';
import {connect} from 'react-redux';
import Header from '../Components/Header';
import FAB from '../Components/FAB';
import RoundedButton from '../Components/RoundedButton';
import React, {useEffect, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import numberFormat from '../Helpers';
const HomeScreen = (props) => {
  const [countryName, setCountryName] = useState(null);
  const [deathTotal, setDeathTotal] = useState(null);
  const [activeTotal, setActiveTotal] = useState(null);
  const [recoveredTotal, setRecoveredTotal] = useState(null);

  useEffect(() => {
    props.getDeathData();
  }, []);

  const _renderItem = ({index, item}) => {
    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemTxtHeader}>{item.countryName}</Text>
        <View style={styles.listViewContent}>
          <View style={styles.listViewYellowBox}>
            <Text style={styles.listTxtYellowBox}>Active</Text>
            <Text style={styles.listTxtYellow}>{item.activeTotal}</Text>
          </View>
          <View style={styles.listViewGreenBox}>
            <Text style={styles.listTxtGreenBox}>Recovered</Text>
            <Text style={styles.listTxtGreen}>{item.recoveredTotal}</Text>
          </View>

          <View style={styles.listViewRedBox}>
            <Text style={styles.listTxtGreenBox}>Death</Text>
            <Text style={styles.listTxtGreen}>{item.deathTotal}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderContentBottomSheet = () => {
    return (
      <View style={styles.bottomSheetRenderContentContainer}>
        <TextInput
          style={styles.txtInput}
          value={countryName}
          onChangeText={(countryText) => setCountryName(countryText)}
          placeholder={'Masukkan Nama Kota'}
        />
        <TextInput
          style={styles.txtInput}
          value={activeTotal}
          onChangeText={(ActiveText) => setActiveTotal(ActiveText)}
          placeholder={'Masukkan Jumlah Pasien Aktif'}
        />
        <TextInput
          style={styles.txtInput}
          value={recoveredTotal}
          onChangeText={(recoveredText) => setRecoveredTotal(recoveredText)}
          placeholder={'Masukkan Jumlah Pasien Sembuh'}
        />
        <TextInput
          style={styles.txtInput}
          value={deathTotal}
          onChangeText={(deathText) => setDeathTotal(deathText)}
          placeholder={'Masukkan Jumlah Pasien Meninggal'}
        />
        <RoundedButton
          onPress={() => {
            props.addNewDeathData({
              countryName: countryName,
              deathTotal,
              recoveredTotal,
              activeTotal,
            });
            RBSheetAdd.close();
          }}
          buttonStyles={styles.btnInput}
          txtStyles={styles.btnInputText}
          text={'Simpan'}
        />
      </View>
    );
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.mainContainer}>
        <Header headerName={'Covid-19 World Cases'} />
        {props.deathData != null && (
          <FlatList
            extraData={props}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            style={{padding: 5, bottom: 5}}
            data={props.deathData}
            renderItem={_renderItem}
          />
        )}

        <FAB onPress={() => RBSheetAdd.open()} />
        <RBSheet
          ref={(ref) => {
            RBSheetAdd = ref;
          }}
          onClose={() => {
            setCountryName(null);
            setDeathTotal(null);
            setActiveTotal(null);

            setRecoveredTotal(null);
          }}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={Dimensions.get('window').height * 0.7}
          openDuration={250}
          customStyles={{
            container: {
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            },
            draggableIcon: {
              backgroundColor: '#D8D8D8',
              width: 59.5,
            },
          }}>
          {renderContentBottomSheet()}
        </RBSheet>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state) => ({
  deathData: state.deathCases.data,
});
const mapDispatchToProps = (dispatch) => ({
  getDeathData: () => dispatch(DeathCasesActions.deathCasesRequest()),
  addNewDeathData: (data) =>
    dispatch(DeathCasesActions.deathCasesRequestAppend(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

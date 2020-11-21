import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
  icn: {alignSelf: 'center'},
  toolBar: {
    backgroundColor: '#FFFFFF',
    height: 70,
    justifyContent: 'center',
  },
  viewFab: {
    width: 50,
    height: 50,
    borderRadius: 25,

    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 12,
    marginBottom: 12,
    justifyContent: 'center',
  },
  banner: {
    marginTop: 10,
  },
  textValues: {
    textAlign: 'left',
  },
  listItemContainer: {
    width: '100%',
    height: 80,
    borderRadius: 25,
    backgroundColor: '#3b5998',
    marginTop: 12,
  },
  listItemTxtHeader: {
    textAlign: 'center',
    top: 3,
    position: 'absolute',
    left: 0,
    right: 0,
    color: 'white',
  },
  listViewContent: {
    width: '100%',
    height: '60%',
    top: 20,
    padding: 5,
    left: 0,
    right: 0,
    color: 'white',
    justifyContent: 'center',
    position: 'absolute',
    flexDirection: 'row',
  },
  listViewYellowBox: {
    marginLeft: 3,
    marginRight: 3,
    width: '30%',
    height: '100%',
    backgroundColor: 'yellow',
    alignItems: 'center',
    borderRadius: 8,
  },
  listTxtYellowBox: {
    color: 'black',
    fontWeight: 'bold',
  },
  listTxtYellow: {
    color: 'black',
  },
  listViewGreenBox: {
    marginLeft: 3,
    marginRight: 3,
    width: '30%',
    height: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 8,
  },
  listViewRedBox: {
    marginLeft: 3,
    marginRight: 3,
    width: '30%',
    height: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 8,
  },
  listTxtGreenBox: {
    color: 'white',
    fontWeight: 'bold',
  },
  listTxtGreen: {
    color: 'white',
  },
  bottomSheetRenderContentContainer: {
    width: '100%',
    height: '100%',
    padding: 12,
  },
  txtInput: {borderBottomWidth: 1, borderBottomColor: '#3b5998'},
  btnInput: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 35,
    backgroundColor: '#3b5998',
    borderRadius: 25,
  },
  btnInputText: {
    color: 'white',
  },
  mainContainer: {width: '100%', height: '100%'},
});

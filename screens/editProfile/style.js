import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // Footer
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 40,
    flexDirection: 'row',
    margin: 10,
  },
  headerText: {
    marginHorizontal: 5,
    color: '#000',
  },
  headerLogo: {
    width: 60,
    height: 60,
  },
  footerContentCentered: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 50,
  },

  footerFavContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  CarteForme: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '91%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
    zIndex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    margin: 10,
  },
  CarteContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    width: '90%',
  },
  socialIcon: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    elevation: 5,
  },
  TextInputSpace: {
    alignItems: 'center',
    width: '98%',
    margin: 10,
  },
  textInput_form: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 10,
    margin: 10,
    height: 65,
    marginBottom: 1,
    color: 'black',
    borderColor: '#ddd',
    borderWidth: 1,
    width: '76%',
  },
  label_Style: {
    width: '20%',
    justifyContent: 'center',
  },
  modalTextScanne: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
  modalTextPhoto: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    top: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: -20,
  },
});

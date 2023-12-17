import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeader from '../Components/Shared/PageHeader'
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab'
import HospitalListBig from '../Components/HospitalDoctorsScreen/HospitalListBig';
import DoctorList from '../Components/HospitalDoctorsScreen/DoctorList';
import GlobalApi from '../Services/GlobalApi';
import Colors from '../../assets/Shared/Colors';

export default function Explores() {

  const [hospitalList,setHospitalList]=useState([]);
  const [doctorsList,setDoctorsList]=useState([]);


  const [activeTab,setActiveTab]=useState('Hospital');

  useEffect(()=>{
    activeTab=='Hospital'?
    getAllHospital()
    :getAllDoctors();
  },[activeTab])

  const getAllHospital=()=>{
    GlobalApi.getAllHospital().then(resp=>{
      setHospitalList(resp.data.data);
    })
  }
  const getAllDoctors=()=>{
    GlobalApi.getAllDoctors().then(resp=>{
      setDoctorsList(resp.data.data);
    })
  }
  return (
    <View style={{padding:20, backgroundColor:Colors.bgColor, height:'100%'}}>
        <Text style={{
            fontSize:26,
            fontFamily:'appfont-semi',
            color:Colors.lightCyan
        }}>Explore</Text>

      <HospitalDoctorTab  
      activeTab={(value)=>setActiveTab(value)} />
        
        {!hospitalList?.length
      ?<ActivityIndicator size={'large'} 
      color={Colors.loadingColor}
      style={{marginTop:'50%'}} />
      : 
      activeTab=='Hospital'?
      <HospitalListBig hospitalList={hospitalList} />
      :<DoctorList doctorsList={doctorsList} />
      }
    </View>
  )
}
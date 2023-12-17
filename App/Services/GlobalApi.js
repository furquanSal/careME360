import axios from "axios";
const BASE_URL="http://172.20.10.5:1337/api"

// const API_KEY="d4a2aa5062560cbda9e72995e9bf31721b5020d90fe00a57c85540df2e2ca9cebccf5c6865a8ba6905cd1b887e985cc6fc79858e6c16a5540af8c7bc6cdc87c9912b755d289d3feb4e2229fa22fcf04f4faa8042e8b0af590f7214f6ebd50b65ec14ddb08f71b9dd8618ab3ddfbf03417a2521c8f3175f6b563b507cd52ad8be"
const API_KEY="8f463839ca3651ab0341de31beb14c22ad3345461063ff47ac1f8566e9515494daaa0aa6d0aedb1ed653117015b8b0d3f0d5849fa1fe18148830a8fafe4dc299542d74083f9e258071d94328af59bd0762a95f347b4a6c15940faeac4fe53db57232b4ed27fbc748c13872ffa6563e500ed66686c5aa1208cd7e83bea2467190"

const AxioInstance=axios.create({
    baseURL:BASE_URL,
    headers:{
        'Authorization':"Bearer "+API_KEY
    }
})

const getSlider=()=>AxioInstance.get("/sliders?populate=*");

const getCategories=()=>AxioInstance.get("/categories?populate=*")

const getPremiumHospitals=()=>AxioInstance.get("/hospitals?filters[Premium][$eq]=true&populate=*")

const getHospitalsByCategory=(category)=>
AxioInstance.get("hospitals?filters[categories][Name][$in]="+category+"&populate=*");

const getDoctorsByCategory=(category)=>
AxioInstance.get("doctors?filters[categories][Name][$in]="+category+"&populate=*")

const createAppointment=(data)=>AxioInstance.post(
    "/appointments",data
)

const getAllHospital=()=>AxioInstance.get("hospitals?populate=*");

const getAllDoctors=()=>
AxioInstance.get("doctors?populate=*")


const getUserAppointments=(email)=>
AxioInstance.get("appointments?filters[email][$eq]="+email+"&populate=*");

export default{
    getSlider,
    getCategories,
    getPremiumHospitals,
    getHospitalsByCategory,
    getDoctorsByCategory,
    createAppointment,
    getAllHospital,
    getAllDoctors,
    getUserAppointments,
}
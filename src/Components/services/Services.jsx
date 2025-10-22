import axios from "axios"

 export let service={
    registerUser:async(payload)=>{
       await axios.post("http://localhost:5174/user",payload)

    },
    loginUser:async(payload)=>{
            let {data}= await axios.get("http://localhost:5174/user",payload)
            let isAvailable=data.find((val)=>val.email==payload.email&&val.password==payload.password)
            let check=isAvailable?"valid":"invalid"
            console.log(check)
            return isAvailable;
    },
    createTask:async(payload)=>{
      await axios.post("http://localhost:5174/task",payload)
    },
    gettask:async(id)=>{
      let data=await axios.get(`http://localhost:5174/task?userid=${id}`)
      // console.log(data)
      return data
    },
    editTask:async(id,payload)=>{
      let data=await axios.put(`http://localhost:5174/task/${id}`,payload)
     // return data
    },deleteTask:async(id)=>{
      let {data}=await axios.delete(`http://localhost:5174/task/${id}`)
      return data
    }
}

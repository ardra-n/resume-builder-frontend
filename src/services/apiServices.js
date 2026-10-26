import axiosServices from '../api/axiosServices'

//ADD RESUME API
export const addResumeAPI=async(reqBody)=>{
    return await axiosServices('POST','/resumes',reqBody)
}

export const viewResumeApi=async(id)=>{
     return await axiosServices('GET',`/resumes/${id}`,{}) 
}
//edit resume api
export const editResumeAPI=async(id,reqBody)=>{
    return await axiosServices('PUT',`/resumes/${id}`,reqBody)

}

export const downloadResumeAPI=async(reqBody)=>{
    return await axiosServices('POST',`/downloads`,reqBody)

}

export const viewDownloadsAPI=async()=>{
    return await axiosServices('GET',`/downloads`,{})

}

export const uploadCloudinary=async(imageData)=>{
    const formData=new FormData()
    formData.append("file",imageData)
    formData.append(
        "upload_preset",
        "resume-builder"
    )
    const response=await fetch('https://api.cloudinary.com/v1_1/ogwlzcve/image/upload',{
        method:'POST',
        body:formData

    })
    let data=await response.json()
    console.log(data.url);
    return data.url
}

export const deleteDownloadsAPI=async(id)=>{
     return await axiosServices('DELETE',`/downloads/${id}`,{}) 
}

export const viewAllResumesAPI =async()=>{
    return await axiosServices('GET',`/resumes`,{})

}

export const deleteSavedAPI =async(id)=>{
    return await axiosServices('DELETE',`/resumes/${id}`,{})

}


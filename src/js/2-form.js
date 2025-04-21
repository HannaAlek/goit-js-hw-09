let formData={ email:"", message:""}

const form=document.querySelector('.feedback-form')
const STORAGE_KEY="feedback-form-state"

form.addEventListener('input',(event)=>{
    formData[event.target.name]=event.target.value.trim();
    localStorage.setItem(STORAGE_KEY,JSON.stringify(formData))
    console.log(formData)
})

const userData=localStorage.getItem(STORAGE_KEY);
    if (userData){
        formData=JSON.parse(userData);
        form.email.value=formData.email || "";
        form.message.value=formData.message ||"";
    }

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData={email:"", message:""}
    form.reset();
})

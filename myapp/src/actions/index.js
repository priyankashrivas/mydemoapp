import  axios from '../apis/axios'
import axios1 from '../apis/axios1'
import history from "../history"
import {toastr} from 'react-redux-toastr'
import {POST_LIST , EDIT_POST , DELETE_POST ,FETCH_USER} from './types'

//it defines our type of application

//function will show the success or warning
const toastrSuccess = (title,msg) => toastr.success(title,msg)
const toastrFailure = (title,msg) => toastr.error(title,msg) 

//login action creator
export const signIn = formValues => async () => {
    try{
      const response  = await axios.post('jwt-auth/v1/token',{...formValues});
      console.log(response.data)
      
      toastrSuccess(`SignIn Successful`,`${formValues.username}`)
      
      //It will set the currently logged in user dat on localstorage
      localStorage.setItem("validToken", response.data.token);
      localStorage.setItem("userId", response.data.user_id);
      //console.log(localStorage.getItem("userId"));
      localStorage.setItem("userName", response.data.user_display_name);    
      //console.log(localStorage.getItem("validToken"))
      history.push('/'); 
    }
    catch(error){
      toastrFailure(` Error due to form submission`,`${formValues.username}`);
    }     
  };
//............................................................................................

//redister user action creator
  export const signUp = formValues => async () => {
    try{
      const response  = await axios.post('wp/v2/users/register',{...formValues});
      console.log(response.data)
      toastrSuccess(`${response.data.message}`,`${formValues.username}`)
      history.push('/'); 
    }
    catch(error){
      toastrFailure(`Error due to form submission`,`${formValues.username}`);
    }   
  };
//...........................................................................................
  

//update user profile action creator
  
export const updateUser = formValues => async () => {
    //console.log(formValues);
    const response  = await axios.post('/wp/v2/users/register',{...formValues});
    console.log(response.data.message);
  };

//..........................................................................................

//fetch user detail action creator

export const veiwUser = id => async (dispatch) => {
  try{
    const response  = await axios.put(`wp/v2/users/${id}`);
    console.log(response.data);
    dispatch({type: FETCH_USER,payload: response.data})
  }catch(error){
    toastrFailure(`User Details`,`User Data Not Found`);
  }  
};
//........................................................................................

//show all post action creator

  export const postList = () => async (dispatch) => {
    try{
        //console.log(header);      
        const response =await axios.get('/wp/v2/posts');
        //console.log(response.data ,'actions');
        dispatch ({type: POST_LIST ,payload: response.data});
    }catch(error){
      toastrFailure(`something went wrong `,``);
    }
    
  };
//............................................................................................

//Create your own post action creator

  export const postCreate = formValues => async () => {
    try{
      console.log(formValues)
      const response  = await axios1.post('/wp/v2/posts',{...formValues});
      console.log(response.data);
      
    }catch(error){
      toastrFailure(`Error due to creating post`,`${formValues.title}`);
    } 
  };

//Edit your own post action creator

export const editPost = (id,formValues)=> async (dispatch) => {
  try{
    const response  = await axios1.post(`/wp/v2/posts/${id}`,formValues);
    console.log(response.data)
    toastrSuccess(`Your post is Successfully updated `,`${formValues.title}`);
    
    dispatch({type: EDIT_POST, payload: response.data})
    history.push('/')
  }catch(error){
    toastrFailure(`Eroor due to form submission`);
  }  
};
//.........................................................................................

// Delete your own post action creator

export const deletePost = (id)=> async (dispatch) => {
  try{
    await axios1.delete(`/wp/v2/posts/${id}`);
    dispatch({type: DELETE_POST, payload: id})
    toastrSuccess(`Your post is Successfully deleted `);
    history.push('/'); 
  }catch(error){
    toastrFailure(`Error`,`post is not deleted`);
    history.push('/'); 
  }  
};

import React, {useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../constants/Contants'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import TextField from '@material-ui/core/TextField'
import CommentListItem from './CommentListItem'
import PostCard from './PostCard'



const PostPage = () => {

    const [postDetails, setPostDetails] = useState(null)
    const [newComment, setNewComment] = useState("")
    const params = useParams()
    const history = useHistory()

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
          history.push('/login')
        } else if (!params.postId) {
          history.push('/feed')
        }
    }, [])
    
    useEffect(() => {
        fetchPostDetails();
    }, [])

    const fetchPostDetails = () => {
        const axiosConfig = {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
    
        axios.get(`${baseUrl}/posts/${params.postId}`, axiosConfig).then((response) => {
          setPostDetails(response.data.post)
        })
    }

    const updateComment = (event) => {
        setNewComment(event.target.value);
    }

    const createComment = async () => {
        const axiosConfig = {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
    
        const body = {
          text: newComment
        }
    
        try{
          await axios.post(`${baseUrl}/posts/${params.postId}/comment`, body, axiosConfig);
    
          setNewComment("");
          fetchPostDetails();
        } catch(error) {
          alert("Não foi possível comentar, tente novamente");
          console.error(error);
        }
    }

    const commentVote = async (commentId, direction) => {
        const axiosConfig = {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
    
        const body = {
          direction: direction
        }
    
        try{
          await axios.put(`${baseUrl}/posts/${params.postId}/comment/${commentId}/vote`, body, axiosConfig)
          fetchPostDetails();
        } catch (error) {
          alert("Não foi possível votar no comentário, tente novamente");
          console.error(error)
        }
    }


    return(
        <div>
            {postDetails !== null && <PostCard post={postDetails} hideComment/>}
            <TextField
                placeholder={"Seu comentário"}
                value={newComment}
                onChange={updateComment}
            />
            <Button onClick={createComment}>Enviar Comentário</Button>
            <List dense>
            {postDetails && postDetails.comments.map((comment) => {
                return (
                    <CommentListItem comment={comment} commentVote={commentVote} />
                )})}
            </List>
        </div>
    )
}

export default PostPage
import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const CommentListItem = (props) => {

  const upVote = () => {
    if(props.comment.userVoteDirection === 1){
      props.commentVote(props.comment.id, 0)
    } else {
      props.commentVote(props.comment.id, 1)
    }
  }

  const downVote = () => {
    if(props.comment.userVoteDirection === -1){
      props.commentVote(props.comment.id, 0)
    } else {
      props.commentVote(props.comment.id, -1)
    }
  }

  return (
    <ListItem>
      <ListItemText
        primary={props.comment.username}
        secondary={props.comment.text}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={upVote}>
          <ArrowUpwardIcon color={props.comment.userVoteDirection === 1 ? "primary" : "disabled"} />
        </IconButton>
        <span>{props.comment.votesCount}</span>
        <IconButton edge="end" onClick={downVote}>
          <ArrowDownwardIcon color={props.comment.userVoteDirection === -1 ? "secondary" : "disabled"}/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default CommentListItem;

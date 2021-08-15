import React from 'react'
import { useHistory } from 'react-router'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import CommentIcon from '@material-ui/icons/Comment'




const PostCard = (props) => {
  const history = useHistory();

  const goToPostDetail = () => {
    history.push(`/post/${props.post.id}`);
  }

  const upVote = () => {
    props.handleVotePost(props.post.id, 1)
  }

  const downVote = () => {
    props.handleVotePost(props.post.id, -1)
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            R
          </Avatar>
        }
        title={props.post.title}
        subheader={props.post.username}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={upVote}>
          <ArrowUpwardIcon color={props.post.userVoteDirection === 1 ? "primary" : "disabled"} />
        </IconButton>
        <IconButton onClick={downVote}>
          <ArrowDownwardIcon color={props.post.userVoteDirection === -1 ? "secondary" : "disabled"}/>
        </IconButton>
        <span>{props.post.votesCount}</span>
        {!props.hideComment && (
          <Button
            variant="contained"
            onClick={goToPostDetail}
            startIcon={<CommentIcon />}
          >
            Comentar
          </Button>)}

      </CardActions>
    </Card>
  )
}

export default PostCard;

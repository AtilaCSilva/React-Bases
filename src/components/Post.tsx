import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import Styles from './Post.module.css';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

interface Author {
  name: string,
  role: string,
  avatarUrl: string,
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;

}

export interface PostType {
  id: number,
  author: Author,
  content: Content[],
  publishedAt: Date,
}

interface PostProps {
  post: PostType,
}

// estado => Variáveis que eu quero que o componente monitore

export function Post({ post }: PostProps) {


  const [comments, setComments] = useState([
    'Post muito louco hein?!'
  ])

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')

  }

  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comments => {
      return comments !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={Styles.post}>
      <header>
        <div className={Styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={Styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={Styles.content}>
        {post.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            <p key={line.content}><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={Styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          value={newCommentText}
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty} >Publicar</button>
        </footer>
      </form>

      <div className={Styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article >
  )
}
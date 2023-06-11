import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string,
  onDeleteComment: (comment: string) => void,
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/atilaCSilva.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>
              <strong>Atila Silva</strong>
              <time
                title='11 de Maio às 08:14h'
                dateTime='2022-05-11 08:14'
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
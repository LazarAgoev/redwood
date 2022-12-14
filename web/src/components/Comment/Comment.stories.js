import Comment from './Comment'

export const defaultView = () => {
  mockCurrentUser({
    roles: 'moderator',
  })

  return (
    <div className="m-4">
      <Comment
        comment={{
          id: 1,
          name: 'Rob Cameron',
          body: 'This is the first comment!',
          createdAt: '2020-01-01T12:34:56Z',
          postId: 1,
        }}
      />
    </div>
  )
}

export const moderatorView = () => {
  return (
    <div className="m-4">
      <Comment
        comment={{
          id: 1,
          name: 'Rob Cameron',
          body: 'This is the first comment!',
          createdAt: '2020-01-01T12:34:56Z',
          postId: 1,
        }}
      />
    </div>
  )
}

export default { title: 'Components/Comment' }

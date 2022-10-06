function ChatAnimation() {
  return (
    <div className='flex absolute top-2 left-2 space-x-1'>
      <div className='w-2 h-2 rounded-full bg-accent-blue ball'></div>
      <div className='w-2 h-2 rounded-full bg-accent-red ball'></div>
      <div className='w-2 delay-400 h-2 rounded-full bg-accent-purple ball'></div>
    </div>
  )
}

export default ChatAnimation

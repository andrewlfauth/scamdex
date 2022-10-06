import tmi from 'tmi.js'

export async function startChat(channelName) {
  const client = new tmi.Client({
    channels: [channelName],
  })

  if (!client.channels.length) {
    throw Error(`Couldn't find channel ${channelName}`)
  }

  await client.connect()

  return client
}

export async function formatChatMessage(tags, message) {
  console.log({
    user: {
      name: tags['display-name'],
      color: tags.color,
    },
    message,
  })
  return {
    user: {
      name: tags['display-name'],
      color: tags.color,
    },
    message,
  }
}

export function getMessageHTML(message, { emotes }) {
  if (!emotes) return message

  // store all emote keywords
  // ! you have to first scan through
  // the message string and replace later
  const stringReplacements = []

  // iterate of emotes to access ids and positions
  Object.entries(emotes).forEach(([id, positions]) => {
    // use only the first position to find out the emote key word
    const position = positions[0]
    const [start, end] = position.split('-')
    const stringToReplace = message.substring(
      parseInt(start, 10),
      parseInt(end, 10) + 1
    )

    stringReplacements.push({
      stringToReplace: stringToReplace,
      replacement: `<img src="https://static-cdn.jtvnw.net/emoticons/v1/${id}/3.0" class="w-5 inline" />`,
    })
  })

  // generate HTML and replace all emote keywords with image elements
  const messageHTML = stringReplacements.reduce(
    (acc, { stringToReplace, replacement }) => {
      // obs browser doesn't seam to know about replaceAll
      return acc.split(stringToReplace).join(replacement)
    },
    message
  )

  return messageHTML
}
export function getMessageHTML(message, { emotes }) {
  if (!emotes) return message

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

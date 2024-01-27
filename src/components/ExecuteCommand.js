const executeCommand = async (command) => {
  const response = await fetch('/execute-command', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ command })
  })
  if (!response.ok) throw new Error('no response')
  const responseText = await response.text()
  return responseText
}

export default executeCommand